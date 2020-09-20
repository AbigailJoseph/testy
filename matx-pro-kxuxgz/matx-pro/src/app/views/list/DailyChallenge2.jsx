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
                <Fab className="ml-4 bg-primary box-shadow-none" size="small">
                  <Icon>brightness_5</Icon>
                </Fab>
                <div className="ml-3">
                  <div className="font-large text-18">Sun Challenge</div>
                </div>
              </Hidden>
            </div>
          </Grid>
          <Grid item md={5}xs={6}>
          <div className="flex justify-center items-center text-muted text-14"> 
          Study 3 different subject for at least 30 mins each 
          </div>
          </Grid>
          <Grid item md={2}xs={3}>  
          <div className="flex justify-end  items-center"> 
          <Link className={classes.menuItem} to="/challenge-confirmation">
          <Button
          className="uppercase"
          size="small"
          variant="contained"
          justify ="flex-end"
        >
          Begin solo
        </Button>
        </Link>
        </div>
        </Grid>
        <Grid item md={2}xs={3}>  
          <div className="flex justify-end  items-center"> 
          <Button
          className="uppercase"
          size="small"
          variant="contained"
          justify ="flex-end"
        >
          Begin in group
        </Button>
        </div>
        </Grid>
        </Grid>
      </Card>
      <div className="py-2" />
    </Fragment>
);
};

export default DailyChallenge2;
