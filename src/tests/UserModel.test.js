import firebaseConfig from "../js/firebaseConfig";
import MeasurementsModel from '../js/MeasurementsModel'
import UserModel from "../js/UserModel";

test('populates the userModel loggedIn value correctly', () => {
    let measurementsModel = new MeasurementsModel();
    let userModel = new UserModel(measurementsModel);
    let dummyUser = { uid: "1234", email: "dummyEmail@test.com", displayName: "HW-DUMMY" };
    userModel.populateUserModelData({ loggedIn: true, user: dummyUser });
    let newLoggedInValue = userModel.loggedIn;
    let expectedValue = true;
    expect(newLoggedInValue).toStrictEqual(expectedValue);
});

test('populates the userModel deviceID value correctly', () => {
    let measurementsModel = new MeasurementsModel();
    let userModel = new UserModel(measurementsModel);
    let dummyUser = { uid: "1234", email: "dummyEmail@test.com", displayName: "HW-DUMMY" };
    userModel.populateUserModelData({ loggedIn: true, user: dummyUser });
    let deviceIDValue = userModel.deviceID;
    let expectedValue = "HW-DUMMY";
    expect(deviceIDValue).toStrictEqual(expectedValue);
});

test('resets the userModel loggedIn value correctly', () => {
    let measurementsModel = new MeasurementsModel();
    let userModel = new UserModel(measurementsModel);
    let dummyUser = { uid: "1234", email: "dummyEmail@test.com", displayName: "HW-DUMMY" };
    userModel.populateUserModelData({ loggedIn: true, user: dummyUser });
    userModel.emptyUserModelData();
    let newLoggedInValue = userModel.loggedIn;
    let expectedValue = false;
    expect(newLoggedInValue).toStrictEqual(expectedValue);
});

test('empties the userModel deviceID value correctly', () => {
    let measurementsModel = new MeasurementsModel();
    let userModel = new UserModel(measurementsModel);
    let dummyUser = { uid: "1234", email: "dummyEmail@test.com", displayName: "HW-DUMMY" };
    userModel.populateUserModelData({ loggedIn: true, user: dummyUser });
    userModel.emptyUserModelData();
    let deviceIDValue = userModel.deviceID;
    let expectedValue = null;
    expect(deviceIDValue).toStrictEqual(expectedValue);
});