import React from "react";

function ShowView({ hash, children }) {
  const [, setRoute] = React.useState(window.location.hash);
  React.useEffect(function () {
    function hashChangeListener() {
      setRoute({});
    }
    window.addEventListener("hashchange", hashChangeListener);

    return () =>
      window.removeEventListener("hashchange", hashChangeListener, false);
  }, []);
  return hash === window.location.hash ? children : false;
}

export default ShowView;