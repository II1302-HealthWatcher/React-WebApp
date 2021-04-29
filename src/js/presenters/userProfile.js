import React from "react";
import UserProfileView from "../views/userProfileView"

function UserProfile() {
    return React.createElement(
        React.Fragment,
        {},
        React.createElement(UserProfileView, {})
    );
}

export default UserProfile;
