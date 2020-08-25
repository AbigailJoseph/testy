import React, { useContext, useEffect } from "react";
import { MatxLayouts } from "./index";
import { useLocation } from "react-router-dom";
import { matchRoutes } from "react-router-config";
import { useDispatch, useSelector } from "react-redux";
import AppContext from "app/appContext";
import { setLayoutSettings } from "app/redux/actions/LayoutActions";
import { isEqual, merge } from "lodash";
import { MatxSuspense } from "matx";
import { useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

const MatxLayoutSFC = (props) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const appContext = useContext(AppContext);
  const isMdScreen = useMediaQuery(theme.breakpoints.down("md"));
  const { settings, defaultSettings } = useSelector((state) => state.layout);
  const { pathname } = useLocation();

  useEffect(() => {
    if (settings.layout1Settings.leftSidebar.show) {
      let mode = isMdScreen ? "close" : "full";
      dispatch(
        setLayoutSettings(
          merge({}, settings, { layout1Settings: { leftSidebar: { mode } } })
        )
      );
    }
  }, [isMdScreen, setLayoutSettings]);

  useEffect(() => {
    updateSettingsFromRouter();
  }, [pathname]);

  const updateSettingsFromRouter = () => {
    const { routes } = appContext;
    const matched = matchRoutes(routes, pathname)[0];

    if (matched && matched.route.settings) {
      // ROUTE HAS SETTINGS
      const updatedSettings = merge({}, settings, matched.route.settings);
      if (!isEqual(settings, updatedSettings)) {
        dispatch(setLayoutSettings(updatedSettings));
      }
    } else if (!isEqual(settings, defaultSettings)) {
      dispatch(setLayoutSettings(defaultSettings));
    }
  };

  const Layout = MatxLayouts[settings.activeLayout];

  return (
    <MatxSuspense>
      <Layout {...props} />
    </MatxSuspense>
  );
};

export default MatxLayoutSFC;
