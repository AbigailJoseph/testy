import React from "react";
import {
  Switch,
  Icon,
  MenuItem,
  Tooltip,
  IconButton,
  Avatar,
  Hidden,
} from "@material-ui/core";
import { withStyles, useTheme } from "@material-ui/core/styles";
import {
  setLayoutSettings,
  setDefaultSettings,
} from "app/redux/actions/LayoutActions";
import { logoutUser } from "app/redux/actions/UserActions";
import { MatxMenu } from "matx";
import Sidenav from "../SharedCompoents/Sidenav";
import Brand from "../SharedCompoents/Brand";
import { merge } from "lodash";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { convertHexToRGB } from "utils";
import clsx from "clsx";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  sidenav: ({ width, primaryRGB, bgImgURL }) => ({
    position: "fixed",
    top: 0,
    left: 0,
    height: "100vh",
    width: width,
    boxShadow: theme.shadows[8],
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top",
    backgroundSize: "cover",
    zIndex: 99,
    overflow: "hidden",
    color: palette.text.primary,
    transition: "all 250ms ease-in-out",
    backgroundImage: `linear-gradient(to bottom, rgba(${primaryRGB}, 0.96), rgba(${primaryRGB}, 0.96)), url(${bgImgURL})`,
    "&:hover": {
      width: "var(--sidenav-width)",
      "& .sidenavHoverShow": {
        display: "block",
      },
      "& .compactNavItem": {
        width: "100%",
        maxWidth: "100%",
        "& .nav-bullet": {
          display: "block",
        },
        "& .nav-bullet-text": {
          display: "none",
        },
      },
    },
  }),
  hideOnCompact: {
    display: "none",
  },
  userInfo: {},
}));

const IconButtonWhite = withStyles((theme) => ({
  root: {
    backgroundColor: "transparent",
    padding: "5px",
  },
}))(IconButton);

const IconSmall = withStyles(() => ({
  root: {
    fontSize: "1rem",
  },
}))(Icon);

const Layout1Sidenav = () => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state);
  const { settings } = useSelector((state) => state.layout);
  const leftSidebar = settings.layout1Settings.leftSidebar;
  const { mode } = leftSidebar;

  const getSidenavWidth = () => {
    switch (mode) {
      case "compact":
        return "var(--sidenav-compact-width)";
      default:
        return "var(--sidenav-width)";
    }
  };

  const primaryRGB = convertHexToRGB(theme.palette.primary.main);
  const classes = useStyles({
    ...leftSidebar,
    width: getSidenavWidth(),
    primaryRGB,
  });

  const updateSidebarMode = (sidebarSettings) => {
    const updatedSettings = merge({}, settings, {
      layout1Settings: {
        leftSidebar: {
          ...sidebarSettings,
        },
      },
    });

    dispatch(setLayoutSettings(updatedSettings));
    dispatch(setDefaultSettings(updatedSettings));
  };

  const handleSidenavToggle = () => {
    updateSidebarMode({ mode: mode === "compact" ? "full" : "compact" });
  };

  const handleSignOut = () => {
    dispatch(logoutUser());
  };

  return (
    <div className={classes.sidenav}>
      <div className="flex-column relative h-full">
        <Brand>
          
        </Brand>
        <Sidenav>
          <div
            className={clsx(
              "flex items-center h-80 px-1 mb-6 mt-2",
              classes.userInfo
            )}
          >
            {/*<Avatar
              src={user?.photoURL}
              className={clsx({ "w-32 h-32": mode === "compacts" })}
            />*/}
            <div
              className={clsx({
                "ml-4 sidenavHoverShow whitespace-pre overflow-hidden": true,
                [classes.hideOnCompact]: mode === "compact",
              })}
            >
              <span className="font-light">Fiona Falvo</span>
              <div className="user__menu">
               {/*<MatxMenu
                 menuButton={
                    <Tooltip title="Settings">
                      <IconButtonWhite
                        aria-label="Delete"
                        className=""
                        size="small"
                      >
                        <IconSmall> settings </IconSmall>
                      </IconButtonWhite>
                    </Tooltip>
                  }
                >
                  <MenuItem className="flex items-center">
                    <Icon> home </Icon>
                    <span className="pl-4"> Home </span>
                  </MenuItem>
                  <MenuItem className="flex items-center">
                    <Icon> settings </Icon>
                    <span className="pl-4"> Account Setting </span>
                  </MenuItem>
                </MatxMenu> */}

                <Tooltip title="Profile">
                  <IconButtonWhite
                    aria-label="Delete"
                    className=""
                    size="small"
                  >
                    <IconSmall>person</IconSmall>
                  </IconButtonWhite>
                </Tooltip>
                <Tooltip title="Sign out">
                  <IconButtonWhite
                    aria-label="Delete"
                    className=""
                    size="small"
                    onClick={handleSignOut}
                  >
                    <IconSmall>exit_to_app</IconSmall>
                  </IconButtonWhite>
                </Tooltip>
              </div>
            </div>
          </div>
        </Sidenav>
      </div>
    </div>
  );
};

export default Layout1Sidenav;
