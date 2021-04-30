import React from "react";

function usePromise(promise) {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  React.useEffect(
    function () {
      setData(null);
      setError(null);
      if (promise != null) {
        promise.then((result) => setData(result)).catch((e) => setError(e));
      }
    },
    [promise]
  );
  return [data, error];
}

export default usePromise;
