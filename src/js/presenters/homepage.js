import React from "react";
import HomepageView from "../views/homepageView"

function Homepage() {
    return React.createElement(
        React.Fragment,
        {},
        React.createElement(HomepageView, {})
    );
}

export default Homepage;