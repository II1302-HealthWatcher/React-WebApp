import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
//import firebaseConfig from "./js/firebaseConfig";
//import MeasurementsModel from "./js/MeasurementsModel";
//import UserModel from "./js/UserModel";
import 'bootstrap/dist/css/bootstrap.min.css';

//const measurementsModel = new MeasurementsModel();
//const userModel = new UserModel({ measurementsModel: measurementsModel });

const measurementsModel = null;
const userModel = null;

ReactDOM.render(<App measurementsModel={measurementsModel} userModel={userModel} />, document.getElementById("app"));
