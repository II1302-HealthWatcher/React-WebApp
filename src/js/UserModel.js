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

    // Performs login to existing account and fills the userModel with the user data.
    loginUser(email, password) {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(result => {
                if (result.user) {
                    this.populateUserModelData({ loggedIn: true, user: result.user });
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

    // Creates a user, updates the profile with the displayName (deviceID), and inserts the inital user data into the database
    // If an error occures, empty the userModel data and report the error.
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

    // Fetches health measurments from the database, and notifies the userModel observers when any changes occur on the user's health measurments and notify the observers (Realtime database).
    fillUserMeasurmentsListFromDb() {

        this.dbref.on('value', (snapshot) => {
            let updatedMeasurmentsList = [];
            updatedMeasurmentsList = snapshot.val().measurementsList;
            if (updatedMeasurmentsList) {
                this.measurementsModel.fillMeasurementsList(updatedMeasurmentsList);
            }
        });

    }

    // Sets the initial user data in the database.
    setInitialDbUserData({ deviceID, email }) {
        this.dbref.set({
            deviceID: deviceID,
            email: email,
            measurmentsList: []
        });
    }

    // Fills the userModel data and sets the login state, in addition to the database reference.
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

    // Reports an error and notify the observers.
    reportError(code, message) {
        this.errorData = { code: code, message: message };
        this.notifyObservers();
    }


    emptyErrorData() {
        this.errorData = null;
        this.notifyObservers();
    }

    // Re-Defines the loggedIn as false and uid, deviceID, email and dbref as null.
    emptyUserModelData() {
        this.loggedIn = false;
        this.uid = null;
        this.deviceID = null;
        this.email = null;
        this.dbref = null;
        this.notifyObservers();
    }

    // Adds an observer to the userModel.
    addObserver(callback) {
        this.subscribers = this.subscribers.concat(callback);
    }

    // Removes the observer from the userModel.
    removeObserver(obs) {
        this.subscribers = this.subscribers.filter(o => { return o !== obs; });
    }

    // Notifies the obvservers after any changes.
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