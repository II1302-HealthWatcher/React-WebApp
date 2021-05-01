import React from "react";
import useModelProp from "../useModelProp";
import NavigationSignoutView from '../views/navigationSignoutView'

function NavigationSignout({ userModel, goToHomePageHref, goToUserProfileHref, }) {

    const modelEmail = useModelProp(userModel, "email");
    const emailUserPart = modelEmail.split('@').shift();

    return React.createElement(NavigationSignoutView, {
        displayName: emailUserPart,
        handleSignout: () => userModel.logoutUser(),
        navHomePageHref: goToHomePageHref,
        navUserProfileHref: goToUserProfileHref
    }); //Render the SigninoutView
}

export default NavigationSignout;
