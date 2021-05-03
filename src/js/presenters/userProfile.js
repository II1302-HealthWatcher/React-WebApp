import React from "react";
import useModelProp from "../useModelProp";
import UserProfileView from "../views/userProfileView"

function UserProfile({ measurementsModel, userModel, navToHome }) {

    const measurementsList = useModelProp(measurementsModel, "measurementsList"); // Observes the measurmentsList in the measurementsModel
    const loggedIn = useModelProp(userModel, "loggedIn"); // Observes the login state

    // If user is not logged in and tries to access this page using the #userProfile hash, the user will be redirected to the home page
    if (!loggedIn) { 
        navToHome();
    }

    return React.createElement(
        React.Fragment,
        {},
        React.createElement(UserProfileView, {
            measurementsList: [...measurementsList] // Pass a deep copy of the measurementsList to the view
        })
    );
}

export default UserProfile;
