import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  flexCenter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  wrapper: {
    width: "100%",
    height: "100vh",
  },
  inner: {
    flexDirection: "column",
    maxWidth: "320px",
  },
}));

const NotFound = () => {
  const classes = useStyles();

  return (
    <div className="flex justify-center items-center h-full-screen w-full">
      <div className="flex-column justify-center items-center max-w-320">
        <img
          className="mb-8 w-full"
          src="/assets/images/illustrations/404.svg"
          alt=""
        />
        <Button
          className="capitalize"
          variant="contained"
          color="primary"
          onClick={() => this.props.history.push("/")}
        >
          Back to Dashboard
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
