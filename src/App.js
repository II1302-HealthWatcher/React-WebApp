import './App.css';
import React from "react";
import ShowView from "./js/presenters/viewManager"
import Navigation from "./js/presenters/navigation";
import NavigationSignin from "./js/presenters/navigationSignin"
import NavigationSignup from "./js/presenters/navigationSignup"
import NavigationSignout from "./js/presenters/navigationSignout"
import Homepage from "./js/presenters/homepage";
import UserProfile from "./js/presenters/userProfile";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const goToHome = () => window.location.hash = "home";
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
      <ShowView hash="#home">
        <div>
          <Homepage />
        </div>
      </ShowView>
      <ShowView hash="#userProfile">
        <div>
          <UserProfile userModel={userModel} measurementsModel={measurementsModel} navToHome={goToHome} />
        </div>
      </ShowView>
      <ToastContainer />
    </div>
  );
}

function defaultRoute() {
  if (!["#home", "#userProfile"].find(knownRoute =>
    knownRoute === window.location.hash))
    window.location.hash = "#home";
}

defaultRoute();
window.addEventListener("hashchange", defaultRoute);

export default App;
