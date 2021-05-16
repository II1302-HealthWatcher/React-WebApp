import React from "react";
import useModelProp from "../useModelProp";
import UserProfileView from "../views/userProfileView"
import { toast } from 'react-toastify';

function UserProfile({ userModel, measurementsModel, navToHome }) {
  const measurementsList = useModelProp(measurementsModel, "measurementsList"); // Observes the measurmentsList in the measurementsModel
  const loggedIn = useModelProp(userModel, "loggedIn"); // Observes the login state
  const [sortConfig, setSortConfig] = React.useState(null);
  const sortableList = [...measurementsList];
  const deviceID = useModelProp(userModel, "deviceID");
  const criticalData = useModelProp(measurementsModel, "criticalData");

  if (!loggedIn) {
    navToHome();
  }


  if (criticalData) {
    toast.error(criticalData.message, {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 6000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    });
    measurementsModel.emptyCriticalData();
  }


  if (sortConfig !== null) {
    sortableList.sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === "ascending" ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === "ascending" ? 1 : -1;
      }
      return 0;
    });
  }

  const requestSort = (key) => {
    let direction = "ascending";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  return React.createElement(
    React.Fragment,
    {},
    React.createElement(UserProfileView, {
      sortableList: sortableList, // Pass a deep copy of the measurementsList to the view
      requestSort: requestSort,
      deviceID: deviceID,
      sortConfig: sortConfig
    })
  );
}

export default UserProfile;
