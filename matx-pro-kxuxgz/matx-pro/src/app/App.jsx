import "../index.css";
import "../fake-db";
/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Provider } from "react-redux";
import { Router, Switch } from "react-router-dom";
import MatxTheme from "./MatxLayout/MatxTheme/MatxTheme";
import AppContext from "./appContext";
import history from "history.js";

import routes from "./RootRoutes";
import { Store } from "./redux/Store";
import { MatxSuspense } from "matx";
import Auth from "./auth/Auth";
import MatxLayout from "./MatxLayout/MatxLayoutSFC";
import AuthGuard from "./auth/AuthGuard";
import sessionRoutes from "./views/sessions/SessionRoutes";
import landingRoutes from "./views/landing/LandingRoutes";
import GlobalCss from "styles/GlobalCss";

const App = () => {
  return (
    <AppContext.Provider value={{ routes }}>
      <Provider store={Store}>
        <MatxTheme>
          <GlobalCss>
            <Router history={history}>
              <Auth>
                <MatxSuspense>
                  <Switch>
                    {sessionRoutes.map((item, ind) => (
                      <AuthGuard
                        key={ind}
                        path={item.path}
                        component={item.component}
                        isPrivate={false}
                      />
                    ))}
                    {landingRoutes.map((item, ind) => (
                      <AuthGuard
                        key={ind}
                        path={item.path}
                        component={item.component}
                        isPrivate={false}
                      />
                    ))}
                    <AuthGuard
                      path="/"
                      component={MatxLayout}
                      isPrivate={true}
                    />
                  </Switch>
                </MatxSuspense>
              </Auth>
            </Router>
          </GlobalCss>
        </MatxTheme>
      </Provider>
    </AppContext.Provider>
  );
};

export default App;
