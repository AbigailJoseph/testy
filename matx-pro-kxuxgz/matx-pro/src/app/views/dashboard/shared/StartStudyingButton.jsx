import React from "react";
import { Grid, Card, Icon, Button, IconButton, Tooltip } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  icon: {
    fontSize: "44px",
    opacity: 0.6,
    color: palette.primary.main,
  },
}));

const StartStudyingButton = () => {
  const classes = useStyles();

  return (
   
        <Card
          className="flex flex-wrap justify-between items-center p-sm-24 bg-paper"
          elevation={6}
        >
          <div className="flex items-center">
            <Icon className={classes.icon}>group</Icon>
            <div className="ml-3">
              <small className="text-muted">New Leads</small>
              <h6 className="m-0 mt-1 text-primary font-medium">3050</h6>
            </div>
          </div>
          <Button
          className="uppercase"
          size="large"
          variant="contained"
          color="primary"
          justify ="center"
        >
          start studying
        </Button>
        </Card>
 
  );
};

export default StartStudyingButton;
