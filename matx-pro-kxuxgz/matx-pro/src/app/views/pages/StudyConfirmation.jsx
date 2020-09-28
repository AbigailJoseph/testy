import React from "react";
import { Card, Button, Icon, Avatar, Grid, MenuItem } from "@material-ui/core";
import { MatxMenu, GoogleIcon } from "matx";
import { Link } from "react-router-dom";
import { Twitter } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  google: {
    color: "#ec412c",
  },
  twitter: {
    color: "#039ff5",
  },
}));

const StudyConfirmation = ({ user }) => {
  const classes = useStyles();

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
         <div className=" justify-center text-black text-40 font-medium">
  You have studied [#][#]:[#][#]:[#][#] of [Math]
      </div>
      <img
              className="w-200"
              src="/assets/images/illustrations/FokusTheFox.svg"
              alt=""
            />
      </div>
      </Grid>
     </Card>
     </Grid>
     </Grid>
     </div>
  </div>
  );
};

export default StudyConfirmation;
