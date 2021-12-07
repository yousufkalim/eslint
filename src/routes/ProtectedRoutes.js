import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { Store, UpdateStore } from "../StoreContext";
import ContentDashboard from "../containers/ContentDashboard";
import api from "../api";

const ProtectedRoutes = () => {
  const updateStore = UpdateStore();
  const { creator } = Store();
  useEffect(() => {
    // checkAuth();
  }, []);
  let checkAuth = async () => {
    let res = await api("get", `admin/auth/check-auth`);
    if (res.status === 200) {
      updateStore({ authorization: true });
    } else {
      localStorage.removeItem("token");
      updateStore({ authorization: null });
    }
  };

  return (
    <>
      {creator ? (
        <>
          <Switch>
            <Route exact path="/dashboard" component={ContentDashboard} />
          </Switch>
        </>
      ) : (
        <>{(window.location = "/contentHome")}</>
      )}
    </>
  );
};

export default ProtectedRoutes;
