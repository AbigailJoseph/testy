import React, { Fragment } from "react";
import { format } from "date-fns";
import {
  Grid,
  Card,
  Icon,
  IconButton,
  Checkbox,
  Fab,
  Avatar,
  Hidden,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import { Link } from "react-router-dom";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  projectName: {
    marginLeft: 24,
    [theme.breakpoints.down("sm")]: {
      marginLeft: 4,
    },
  },
}));

const DailyChallenge2 = () => {
  const classes = useStyles();

return (
   <Fragment>
      <Card className="py-2 px-4 project-card">
        <Grid container alignItems="center">
          <Grid item md={3} xs={4}>
            <div className="flex items-center">
              <Hidden smDown>
                <Fab className="ml-4 bg-light-error box-shadow-none" size="small">
                  <Icon>cloud_queue</Icon>
                </Fab>
                <div className="ml-3">
                  <div className="font-large text-18">Cloud Challenge</div>
                </div>
              </Hidden>
            </div>
          </Grid>
          <Grid item md={5}xs={6}>
          <div className="flex justify-center items-center text-muted text-14"> 
          Study for 1 hour every day for a week
          </div>
          </Grid>
          <Grid item md={4}xs={5}>  
          <div className="flex justify-end  items-center"> 
          <Link className={classes.menuItem} to="/challenge-confirmation">
          <Button
          className="uppercase"
          size="small"
          variant="contained"
          justify ="flex-end"
        >
         Start Challenge
        </Button>
        </Link>
        </div>
        </Grid>
        </Grid>
      </Card>
      <div className="py-2" />
    </Fragment>
);
};

export default DailyChallenge2;