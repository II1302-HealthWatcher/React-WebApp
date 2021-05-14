import { render, screen } from '@testing-library/react';
import firebaseConfig from "../js/firebaseConfig";
import MeasurementsModel from '../js/MeasurementsModel'
import UserModel from "../js/UserModel";
import UserProfile from "../js/presenters/userProfile";

function renderUserProfileComponent() {
    let goToHome = () => window.location.hash = "home";
    let measurementsModel = new MeasurementsModel();
    let userModel = new UserModel(measurementsModel);
    let dummyUser = { uid: "1234", email: "dummyEmail@test.com", displayName: "HW-DUMMY" };
    userModel.populateUserModelData({ loggedIn: true, user: dummyUser });
    let testList = [{
        MeasurementDate: "2021-05-05 15:00",
        HeartPulse: "75",
        BodyTemperature: "36.5",
        BloodOxygenLevel: "98"
    }];
    measurementsModel.fillMeasurementsList(testList);
    return render(<UserProfile userModel={userModel} measurementsModel={measurementsModel} navToHome={goToHome} />);
}

test('renders the device id text element correctly ', () => {
    let renderResult = renderUserProfileComponent();
    let deviceIDTextElement = renderResult.getByTestId("deviceIDTextElement");
    let deviceIDTextContent = deviceIDTextElement.textContent;
    let expectedDeviceIDTextContent = "This is the data over time for the device : HW-DUMMY";
    expect(deviceIDTextContent).toBe(expectedDeviceIDTextContent);
});

test('renders the measurement date in the table correctly ', () => {
    let renderResult = renderUserProfileComponent();
    let measurmentsTableElement = renderResult.getByTestId("measurementsListTableElement");
    let measurmentsTableTextContent = measurmentsTableElement.textContent;
    let expectedMeasurmentsTableToContain = "2021-05-05 15:00";
    expect(measurmentsTableTextContent).toContain(expectedMeasurmentsTableToContain);
});

