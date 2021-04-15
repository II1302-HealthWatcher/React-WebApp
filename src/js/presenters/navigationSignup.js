import React from "react";
import NavigationSignupView from '../views/navigationSignupView'

function NavigationSignup({ userModel }) {

     
    const [email, setEmail] = React.useState(""); // Holds the inputed email
    const [password, setPassword] = React.useState(""); // Holds the inputed password
	const [deviceID, setDeviceID] = React.useState(""); // Holds the inputed DeviceID
    const [showSignup, setShowSignup] = React.useState(false); // The Signup modal gets rendered depending on this value

    return React.createElement(NavigationSignupView, {
        setEmail: (email) => setEmail(email),
        setPassword: (password) => setPassword(password),
		setDeviceID: (deviceID) => setDeviceID(deviceID),
        handleSignup: () => console.log("Not implemented") /*userModel.signupUser(email, password, deviceID)*/,
        show: showSignup,
        handleShow: () => setShowSignup(true),
        handleClose: () => setShowSignup(false)
    }); //Render the SignupView
}

export default NavigationSignup;
