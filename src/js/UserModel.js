import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

class UserModel {
    constructor({ measurementsModel }) {
        this.subscribers = [];
        this.measurementsModel = measurementsModel;
        this.loggedIn = null;
        this.uid = null;
        this.deviceID = null;
        this.email = null;
        this.dbref = null;
        this.errorData = null;
        
        if (firebase.auth().currentUser) {
            this.populateUserModelData({ loggedIn: true, user: firebase.auth().currentUser });
            this.fillUserMeasurmentsListFromDb();
        }
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.populateUserModelData({ loggedIn: true, user: user });
                this.fillUserMeasurmentsListFromDb();
            } else {
                this.emptyUserModelData();
            }
        });
    }

    loginUser(email, password) {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(result => {
                if (result.user) {
                    this.populateUserModelData({ loggedIn: true, user: result.user });
                    this.fillUserMeasurmentsListFromDb();
                }
            })
            .catch(err => {
                this.emptyUserModelData();
                this.reportError(err.code, err.message);
            })

    }

    logoutUser() {
        firebase.auth().signOut().then(() => {
            this.emptyUserModelData();
            this.measurementsModel.emptyLocalMeasurementsList();
        }).catch(err => {
            this.emptyUserModelData();
            this.reportError(err.code, err.message);
        });
    }

    signupUser(email, password, deviceID) {

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(result => {
                if (result.user) {
                    result.user.updateProfile({ displayName: deviceID });
                    this.deviceID = deviceID;
                    this.populateUserModelData({ loggedIn: true, user: result.user });
                    this.setInitialDbUserData({ deviceID: deviceID, email: email });
                }
            })
            .catch(err => {
                this.emptyUserModelData();
                this.reportError(err.code, err.message);
            })

    }

    fillUserMeasurmentsListFromDb() {
        let measurmentsList = [];
        this.dbref.once('value').then((snapshot) => {
            measurmentsList = snapshot.val().measurementsList;
            if (measurmentsList) {
                this.measurementsModel.fillMeasurementsList(measurmentsList);
            }
        });
    }

    setInitialDbUserData({ deviceID, email }) {
        this.dbref.set({
            deviceID: deviceID,
            email: email,
            measurmentsList: []
        });
    }


    populateUserModelData({ loggedIn, user }) {
        this.loggedIn = loggedIn;
        this.uid = user.uid;
        if (user.displayName) {
            this.deviceID = user.displayName;
        }
        this.email = user.email;
        this.dbref = firebase.database().ref('users/' + this.deviceID);
        this.notifyObservers();
    }

    reportError(code, message) {
        this.errorData = { code: code, message: message };
        this.notifyObservers();
    }

    emptyErrorData() {
        this.errorData = null;
        this.notifyObservers();
    }

    emptyUserModelData() {
        this.loggedIn = false;
        this.uid = null;
        this.deviceID = null;
        this.email = null;
        this.dbref = null;
        this.notifyObservers();
    }

    addObserver(callback) {
        this.subscribers = this.subscribers.concat(callback);
    }

    removeObserver(obs) {
        this.subscribers = this.subscribers.filter(o => { return o !== obs; });
    }

    notifyObservers() {
        this.subscribers.forEach(callback => {
            try {
                callback();
            }
            catch (err) {
                console.error("Callback error: ", err, callback);
            }
        });
    }

}

export default UserModel;