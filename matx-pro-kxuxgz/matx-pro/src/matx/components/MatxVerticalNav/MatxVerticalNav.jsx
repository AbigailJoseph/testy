import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { Icon } from "@material-ui/core";
import TouchRipple from "@material-ui/core/ButtonBase";
import MatxVerticalNavExpansionPanel from "./MatxVerticalNavExpansionPanel";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  navItem: {
    "&.active": {
      background: palette.secondary.main,
      boxShadow: theme.shadows[3],
    },
    transition: "all 250ms ease-in-out",
  },
  compactNavItem: {
    overflow: "hidden",
    justifyContent: "center !important",
    "& $itemText": {
      display: "none",
    },
    "& $itemIcon": {
      display: "none",
    },
  },
  itemIcon: {},
  itemText: {
    fontSize: "0.875rem",
    paddingLeft: "0.8rem",
  },
}));

const MatxVerticalNav = () => {
  const navigations = useSelector((state) => state.navigations);
  const { settings } = useSelector((state) => state.layout);
  const { mode } = settings.layout1Settings.leftSidebar;
  const classes = useStyles();

  const renderLevels = (data) => {
    return data.map((item, index) => {
      if (item.type === "label")
        return (
          <p
            className={clsx({
              "px-4 text-light-white uppercase sidenavHoverShow": true,
              hidden: mode === "compact",
            })}
            key={index}
          >
            {item.label}
          </p>
        );
      if (item.children) {
        return (
          <MatxVerticalNavExpansionPanel mode={mode} item={item} key={index}>
            {renderLevels(item.children)}
          </MatxVerticalNavExpansionPanel>
        );
      } else if (item.type === "extLink") {
        return (
          <a
            key={index}
            href={item.path}
            className={clsx({
              "flex justify-between h-44 border-radius-4 mb-2 compactNavItem whitespace-pre overflow-hidden": true,
              [classes.navItem]: true,
              [classes.compactNavItem]: mode === "compact",
            })}
            rel="noopener noreferrer"
            target="_blank"
          >
            <TouchRipple key={item.name} name="child" className="w-full">
              {(() => {
                if (item.icon) {
                  return (
                    <Icon className="text-18 align-middle px-4">
                      {item.icon}
                    </Icon>
                  );
                } else {
                  return (
                    <span className="item-icon icon-text">{item.iconText}</span>
                  );
                }
              })()}
              <span
                className={clsx(
                  "align-middle sidenavHoverShow",
                  classes.itemText
                )}
              >
                {item.name}
              </span>
              <div className="mx-auto"></div>
              {item.badge && (
                <div className={`rounded bg-${item.badge.color} px-1 py-1px`}>
                  {item.badge.value}
                </div>
              )}
            </TouchRipple>
          </a>
        );
      } else {
        return (
          <NavLink
            key={index}
            to={item.path}
            className={clsx({
              "flex justify-between h-44 border-radius-4 mb-2 compactNavItem whitespace-pre overflow-hidden": true,
              [classes.navItem]: true,
              [classes.compactNavItem]: mode === "compact",
            })}
          >
            <TouchRipple key={item.name} name="child" className="w-full">
              {item?.icon ? (
                <Icon className="text-18 align-middle w-36 px-4">{item.icon}</Icon>
              ) : (
                <Fragment>
                  <div
                    className={clsx({
                      "nav-bullet p-2px rounded ml-5 mr-4 bg-white": true,
                      hidden: mode === "compact",
                    })}
                  ></div>
                  <div
                    className={clsx({
                      "nav-bullet-text ml-5 text-11": true,
                      hidden: mode !== "compact",
                    })}
                  >
                    {item.iconText}
                  </div>
                </Fragment>
              )}
              <span
                className={clsx(
                  "align-middle text-left sidenavHoverShow",
                  classes.itemText
                )}
              >
                {item.name}
              </span>
              <div className="mx-auto"></div>
              {item.badge && (
                <div
                  className={clsx(
                    `rounded bg-${item.badge.color} px-1 py-1px`,
                    "sidenavHoverShow",
                    classes.itemIcon
                  )}
                >
                  {item.badge.value}
                </div>
              )}
            </TouchRipple>
          </NavLink>
        );
      }
    });
  };

  return <div className="navigation">{renderLevels(navigations)}</div>;
};

export default MatxVerticalNav;
