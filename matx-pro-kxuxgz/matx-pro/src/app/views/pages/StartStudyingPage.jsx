import React, { useState, useEffect } from "react";
import {
  Grid,
  Card,
  Icon,
  Avatar,
  IconButton,
  Divider,
  Button,
  TextField,
  LinearProgress,
} from "@material-ui/core";
import { Twitter } from "@material-ui/icons";
import { Breadcrumb, FacebookIcon, GoogleIcon } from "matx";
import Axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import ReactStopwatchTimer from 'react-stopwatch-timer';
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  google: {
    color: "#ec412c",
    backgroundColor: "rgba(236,65,44,.1)",
    borderColor: "#ec412c",

    "&:hover": {
      background: `#ec412c`,
      color: "#ffffff",
    },
  },
  facebook: {
    color: "#3765c9",
    backgroundColor: "rgba(55,101,201,.1)",
    borderColor: "#3765c9",

    "&:hover": {
      background: `#3765c9`,
      color: "#ffffff",
    },
  },
  twitter: {
    color: "#039ff5",
    backgroundColor: "rgba(3,159,245,.1)",
    borderColor: "#039ff5",

    "&:hover": {
      background: `#039ff5`,
      color: "#ffffff",
    },
  },
}));

const fromTime = new Date(0, 0, 0, 0, 0, 0, 0);

const StartStudyingPage = () => {
  const [isAlive, setIsAlive] = useState(true);
  const [userList, setUserList] = useState([]);

  const classes = useStyles();
  const [isOn, setIsOn] = useState(false);

  useEffect(() => {
    Axios.get("/api/user/all").then(({ data }) => {
      if (isAlive) setUserList(data);
    });
    return () => setIsAlive(false);
  }, []);

  return (
    <div className="m-sm-30">
      { /*<div className="mb-sm-30">
       <Breadcrumb
          routeSegments={[
            { name: "Pages", path: "/pages" },
            { name: "User List 1" },
          ]}
        />
      </div>*/}
      <div className="pb-24 pt-7 px-8 ">
        <div className="  text-black  text-40 font-medium">
          Start Studying
        </div>
      </div>
      <div className="analytics m-sm-30 mt--18"> 
        <Card
          className="flex flex-wrap justify-center items-center p-sm-24 bg-paper"
          elevation={6}
        >
        <Grid container spacing  = {6}  justify= "flex-start">
        <Grid item lg={12} md={8} sm={12} xs={12}> 
       
          <div className="  text-black  text-14 font-medium">
          Instructions:
        </div>
           <Typography>
            Press the START button to begin recording your study session. 
            To end your session simply press the STOP button.
            </Typography>
            
            </Grid>
            
            <Grid item lg={12} md={8} sm={12} xs={12}> 
            <div className="flex items-center justify-center">
            <TextField
          className="max-w-400"
          variant="outlined"
          placeholder="Enter the subject you wish to study for this session"
          size="small"
          fullWidth
          InputProps={{
          
            style: {
              borderRadius: 300,
              paddingRight: 0,
            },
          }}
        />
        </div>
        </Grid>
        <Grid item lg={12} md={8} sm={12} xs={12}> 
        <div className="flex items-center justify-center">
        <img
                className="w-200"
                src="/assets/images/illustrations/FokusTheFox.svg"
                alt=""
              />
      <ReactStopwatchTimer isOn={isOn} className="react-stopwatch-timer__table" watchType="stopwatch"
          displayCircle={true} color="gray" hintColor="orange" fromTime={fromTime}>
           <Button  color="primary" onClick={() =>  setIsOn(true) }>START</Button>
           <Link className={classes.menuItem} to="/pages/study-confirmation">
           <Button color="primary" onClick={() =>  setIsOn(false) }>STOP</Button>
           </Link>
       </ReactStopwatchTimer>
       <img
                className="w-200"
                src="/assets/images/illustrations/FokusTheFox.svg"
                alt=""
              />
       </div>
       </Grid>
       </Grid>
       </Card>
       </div>
    </div>
  );
};

export default StartStudyingPage;
