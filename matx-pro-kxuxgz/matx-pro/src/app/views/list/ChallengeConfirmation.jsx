import React, { useState, useEffect } from "react";
import {
  Grid,
  Card,
  Button,
  TextField,
} from "@material-ui/core";
import Axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
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


const ChallengeConfirmation = () => {
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
      <div className=" mb-sm-30"> 
      <div className=" justify-center text-muted-white  text-40 font-medium">
          l
        </div>
        <Grid container  justify= "center">
        <Grid item lg={10} md={8} sm={10} xs={10}> 
        <Card
          className="flex flex-wrap justify-center items-center p-sm-24 bg-paper"
          elevation={6}
        >
        <Grid item lg={12} md={10} sm={12} xs={12}> 
        <div className="flex items-center justify-center">
        <img
                className="w-200"
                src="/assets/images/illustrations/FokusTheFox.svg"
                alt=""
              />
           <div className=" justify-center text-black  text-40 font-medium">
           Congratulations! You have officially signed up for the Star Challenge
        </div>
        <img
                className="w-200"
                src="/assets/images/illustrations/FokusTheFox.svg"
                alt=""
              />
        </div>
        </Grid>
        <Grid item lg={10} md={8} sm={10} xs={10}> 
        <div className="flex items-center justify-center">
        <Link className={classes.menuItem} to="pages/start-studying-page">
            <Button
            className="uppercase"
            size="small"
            variant="contained"
            justify ="flex-end"
          >
            Begin!
          </Button>
          </Link>
          </div>
       </Grid>
       </Card>
       </Grid>
       </Grid>
       </div>
    </div>
  );
};

export default ChallengeConfirmation;
