import React from "react";
import NavigationSigninView from '../views/navigationSigninView'

function NavigationSignin({ userModel }) {

    const [email, setEmail] = React.useState(""); // Holds the inputed email
    const [password, setPassword] = React.useState(""); // Holds the inputed password
    const [showSignin, setShowSignin] = React.useState(false); // The Signin modal gets rendered depending on this value


    return React.createElement(NavigationSigninView, {
        setEmail: (email) => setEmail(email),
        setPassword: (password) => setPassword(password),
        handleSignin: () => userModel.loginUser(email, password),
        show: showSignin,
        handleShow: () => setShowSignin(true),
        handleClose: () => setShowSignin(false)
    }); //Render the SigninView
}

export default NavigationSignin;
