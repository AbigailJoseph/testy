/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect, useState, Children } from "react";
import { useDispatch } from "react-redux";
import { setUserData } from "../redux/actions/UserActions";
import { getNavigationByUser } from "../redux/actions/NavigationAction";
import jwtAuthService from "../services/jwtAuthService";
// import firebaseAuthService from "../services/firebase/firebaseAuthService";
import { setAuthLoadingStatus } from "app/redux/actions/LoginActions";

const checkJwtAuth = async (dispatch, setUserData) => {
  // You need to send token to your server to check token is valid
  // modify loginWithToken method in jwtService
  return jwtAuthService
    .loginWithToken()
    .then((user) => {
      dispatch(setUserData(user));
    })
    .catch(() => {
      dispatch(setUserData(null));
    });
};

// const checkFirebaseAuth = () => {
//   firebaseAuthService.checkAuthStatus((user) => {
//     if (user) dispatch(setUserData(user));
//     if (user) {
//       console.log(user.uid);
//       console.log(user.email);
//       console.log(user.emailVerified);
//     } else {
//       console.log("not logged in");
//     }
//   });
// };

const Auth = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setAuthLoadingStatus(true));
    checkJwtAuth(dispatch, setUserData)
      .then(() => {
        dispatch(getNavigationByUser());
      })
      .finally(() => dispatch(setAuthLoadingStatus(false)));
  }, [setUserData, getNavigationByUser]);

  return <Fragment>{children}</Fragment>;
};

export default Auth;
