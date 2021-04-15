import React from "react";
import useModelProp from "../useModelProp";
import NavigationSignoutView from '../views/navigationSignoutView'

function NavigationSignout({ userModel, goToHomePageHref, goToUserProfileHref, }) {

    //const modelEmailUserPart = useModelProp(userModel, "displayName");
	const modelEmailUserPart = "testUser"; // Place holder for the displayName until the UserModel is implemented
	
    return React.createElement(NavigationSignoutView, {
        displayName: modelEmailUserPart,
        handleSignout: () => console.log("Not implemented")/*userModel.logoutUser()*/,
        navHomePageHref: goToHomePageHref,
        navUserProfileHref: goToUserProfileHref
    }); //Render the SigninoutView
}

export default NavigationSignout;
