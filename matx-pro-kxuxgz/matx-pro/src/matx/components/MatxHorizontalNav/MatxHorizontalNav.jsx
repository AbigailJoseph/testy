import React from "react";
import { NavLink } from "react-router-dom";
import { Icon } from "@material-ui/core";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  menu: {
    padding: 0,
    margin: 0,
    listStyle: "none",
    position: "relative",
    float: "left",
    paddingRight: 45,
    marginLeft: -20,
    zIndex: 99,
    "& li": {
      float: "left",
      margin: 0,
      display: "inline-block",
      "&  div": {
        "& a, div": {
          borderBottom: "2px solid transparent",
          height: 48,
          margin: "0px 6px",
          boxSizing: "border-box",
        },
      },
    },
    "& a": {
      padding: "8px 20px",
      height: 48,
    },
    // margin-left: -20,
    // zi: 99,
  },
}));

const MatxHorizontalNav = ({ max, className }) => {
  const classes = useStyles();
  let navigation = useSelector(({ navigations }) => navigations);

  if (!navigation || !navigation.length) {
    return null;
  }

  if (max && navigation.length > max) {
    let childItem = {
      name: "More",
      icon: "more_vert",
      children: navigation.slice(max, navigation.length),
    };
    navigation = navigation.slice(0, max);
    navigation.push(childItem);
  }

  function renderLevels(levels) {
    return levels.map((item, key) => {
      if (item.children) {
        return (
          <li key={key}>
            <a href="/">
              {item.icon && (
                <Icon className="text-18 align-middle">{item.icon}</Icon>
              )}
              {item.name}
            </a>
            <ul>{renderLevels(item.children)}</ul>
          </li>
        );
      } else {
        return (
          <li key={key}>
            <NavLink to={item.path}>
              {item.icon && (
                <Icon className="text-18 align-middle">{item.icon}</Icon>
              )}
              {item.name}
            </NavLink>
          </li>
        );
      }
    });
  }

  return (
    <div className={"horizontal-nav"}>
      <ul className={"menu"}>{renderLevels(navigation)}</ul>
    </div>
  );
};

export default MatxHorizontalNav;
