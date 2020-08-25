import React, { useContext, useEffect, useState } from "react";
import { Route, Redirect, useLocation } from "react-router-dom";
import Scrollbar from "react-perfect-scrollbar";
import { useSelector } from "react-redux";
import AppContext from "app/appContext";
import { MatxLoading } from "matx";

const getAuthStatus = (pathname, user, routes) => {
  const matched = routes.find((r) => r.path === pathname);

  const authenticated =
    matched && matched.auth && matched.auth.length
      ? matched.auth.includes(user.role)
      : Object.keys(user).length;

  return authenticated;
};

const AuthGuard = ({ component: Component, isPrivate = true, ...rest }) => {
  const [previouseRoute, setPreviousRoute] = useState(null);

  const { routes } = useContext(AppContext);
  const { pathname } = useLocation();
  const {
    user,
    login: { loading },
  } = useSelector((state) => state);

  let authenticated = getAuthStatus(pathname, user, routes);

  useEffect(() => {
    setPreviousRoute(pathname);
  }, []);

  return (
    <Route
      {...rest}
      render={(props) => {
        if (loading && isPrivate) return <MatxLoading />;
        else if (authenticated || !isPrivate)
          return (
            <Scrollbar
              className="h-full-screen"
              options={{ suppressScrollX: true }}
            >
              <Component {...props} />
            </Scrollbar>
          );
        else
          return (
            <Redirect
              to={{
                pathname: "/session/signin",
                state: { redirectUrl: previouseRoute },
              }}
            />
          );
      }}
    />
  );
};

export default AuthGuard;
