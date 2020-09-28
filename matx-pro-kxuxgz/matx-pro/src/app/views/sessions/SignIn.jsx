import React, { Fragment } from "react";
import {
  Card,
  Grid,
  Button,
  CircularProgress,
} from "@material-ui/core";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import { useDispatch } from "react-redux";

import { loginWithEmailAndPassword } from "../../redux/actions/LoginActions";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import history from "history.js";
import { useLocation } from "react-router-dom";
import clsx from "clsx";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  cardHolder: {
    background: "#ADD8E6", // prev: #1A2038, #FFB35C
  },

  buttonProgress: {
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12,
  },

}));

const SignIn = () => {
  const [loading, setLoading] = useState(false);
  const [userInfo, setUserInfo] = useState({});

  const dispatch = useDispatch();
  const { state } = useLocation();
  const classes = useStyles();

  const handleChange = ({ target: { name, value } }) => {
    let temp = { ...userInfo };
    temp[name] = value;
    setUserInfo(temp);
  };

  const handleFormSubmit = (event) => {
    setLoading(true);
    dispatch(loginWithEmailAndPassword(userInfo)).then(() => {
      setLoading(false);
      state ? history.push(state.redirectUrl) : history.push("/");
    });
  };

  return (
   <div
      className={clsx(
        "flex justify-center items-center  min-h-full-screen",
        classes.cardHolder
      )}
    >
      <Card className={classes.card}>
        <Grid container>
          <Grid item lg={5} md={5} sm={5} xs={12}>
            <div className="p-8 flex justify-center items-center h-full">
              <img
                className="w-200"
                src="/assets/images/illustrations/FokusTheFox.svg"
                alt=""
              />
            </div>
          </Grid>
          <Grid item lg={7} md={7} sm={7} xs={12}>
            <div className="p-8 h-full bg-light-gray relative">
              <ValidatorForm onSubmit={handleFormSubmit}>
                <TextValidator
                  className="mb-6 w-full"
                  variant="outlined"
                  label="Email"
                  onChange={handleChange}
                  type="email"
                  name="email"
                  value={userInfo.email || ""}
                  validators={["required", "isEmail"]}
                  errorMessages={[
                    "this field is required",
                    "username is not valid",
                  ]}
                />
                <TextValidator
                  className="mb-3 w-full"
                  label="Password"
                  variant="outlined"
                  onChange={handleChange}
                  name="password"
                  type="password"
                  value={userInfo.password || ""}
                  validators={["required"]}
                  errorMessages={["this field is required"]}
                /> 
                 
                <div className="flex flex-wrap items-center mb-4"> 
                  <div className="relative">
                    <Button
                      variant="contained"
                      color ="primary" 
                      disabled={loading}
                      type="submit"
                    >
                      Sign in
                    </Button>
                    {loading && (
                      <CircularProgress
                        size={24}
                        className={classes.buttonProgress}
                      />
                    )}
                  </div>
                  <span className="mr-2 ml-5">or</span>
                  <Button
                    className="capitalize"
                    onClick={() => history.push("/session/signup")}
                  >
                    Sign up
                  </Button>
                </div>
              </ValidatorForm>
            </div>
          </Grid>
        </Grid>
      </Card>
    </div>  
  );
};

export default SignIn;
