import React, { useState } from "react";
import {
  Card,
  Checkbox,
  FormControlLabel,
  Grid,
  Button,
  CircularProgress,
} from "@material-ui/core";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { makeStyles } from "@material-ui/core/styles";
import history from "history.js";
import clsx from "clsx";
import { Link } from "react-router-dom";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  cardHolder: {
    background: "#FFB35C", //prev: #1A2038
  },
  card: {
    maxWidth: 800,
    borderRadius: 12,
    margin: "1rem",
  },
  buttonProgress: {
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12,
  },
}));

const SignUp = () => {
  const [state, setState] = useState({});
  const classes = useStyles();

  const handleChange = ({ target: { name, value } }) => {
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleFormSubmit = (event) => {
    console.log(state);
  };

  let { name, email, schoolName, password, agreement } = state;

  return (
    <div
      className={clsx(
        "flex justify-center items-center  min-h-full-screen",
        classes.cardHolder
      )}
    >
       <div className=" text-left mb-11 wrap">
        <h3 className="m-0 font-large">
          Welcome to Fokus!
        </h3>
      </div>
      <Card className={classes.card}>
        <Grid container>
          <Grid item lg={5} md={5} sm={5} xs={12}>
            <div className="p-8 flex justify-center bg-light-gray items-center h-full">
              <img
                src="/assets/images/illustrations/FokusTheFox.svg"
                alt=""
              />
            </div>
          </Grid>
          <Grid item lg={7} md={7} sm={7} xs={12}>
            <div className="p-8 h-full">
              <ValidatorForm onSubmit={handleFormSubmit}>
                <TextValidator
                  className="mb-6 w-full"
                  variant="outlined"
                  label="Name"
                  onChange={handleChange}
                  type="text"
                  name="name"
                  value={name || ""}
                  validators={["required"]}
                  errorMessages={["this field is required"]}
                />
                <TextValidator
                  className="mb-6 w-full"
                  label="School Name"
                  variant="outlined"
                  onChange={handleChange}
                  name="schoolName"
                  type="schoolName"
                  value={schoolName || ""}
                  validators={["required"]}
                  errorMessages={["this field is required"]}
                />
                  <TextValidator
                  className="mb-6 w-full"
                  variant="outlined"
                  label="Email"
                  onChange={handleChange}
                  type="email"
                  name="email"
                  value={email || ""}
                  validators={["required", "isEmail"]}
                  errorMessages={[
                    "this field is required",
                    "email is not valid",
                  ]}
                />
                <TextValidator
                  className="mb-4 w-full"
                  label="Password"
                  variant="outlined"
                  onChange={handleChange}
                  name="password"
                  type="password"
                  value={password || ""}
                  validators={["required"]}
                  errorMessages={["this field is required"]}
                />
                <div className="flex items-center">
                  <Button
                    className="capitalize"
                    variant="contained"
                    color="primary"
                    type="submit"
                    onClick={() => history.push("/session/signup")}
                  >
                    Sign up
                  </Button>
                  <span className="mx-2 ml-5">or</span>
                  <Link to="/session/SignIn">
                    <Button className="capitalize">Sign in</Button>
                  </Link>
                </div>
              </ValidatorForm>
            </div>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
};

export default SignUp;
