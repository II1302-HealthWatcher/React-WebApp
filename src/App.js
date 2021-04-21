import './App.css';
import React from "react";
import Navigation from "./js/presenters/navigation";
import NavigationSignin from "./js/presenters/navigationSignin"
import NavigationSignup from "./js/presenters/navigationSignup"
import NavigationSignout from "./js/presenters/navigationSignout"
import Homepage from "./js/presenters/homepage";
import { ToastContainer } from 'react-toastify';


const goToHomePageHref = "#home";
const goToUserProfileHref = "#userProfile";

// The main app container
function App({ measurementsModel, userModel }) {
  return (
    <div>
      <Navigation userModel={userModel}>
        <NavigationSignin userModel={userModel} />
        <NavigationSignup userModel={userModel} />
        <NavigationSignout userModel={userModel} goToHomePageHref={goToHomePageHref} goToUserProfileHref={goToUserProfileHref} />
      </Navigation>
      <Homepage />
      <ToastContainer />
    </div>
  );
}

export default App;
