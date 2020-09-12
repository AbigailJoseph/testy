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
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CustomizedDialog from "../../material-kit/dialog/CustomizedDialog";
import clsx from "clsx";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  projectName: {
    marginLeft: 24,
    [theme.breakpoints.down("sm")]: {
      marginLeft: 4,
    },
  },
}));

const ChallengeCard1 = () => {
  const classes = useStyles();

return (
   <Fragment>
      <Card className="py-2 px-4 project-card">
        <Grid container alignItems="center">
          <Grid item md={5} xs={7}>
            <div className="flex items-center">
              <Hidden smDown>
                <Fab className="ml-4 bg-primary box-shadow-none" size="small">
                  <Icon>brightness_5</Icon>
                </Fab>
                <div className="ml-3">
                  <div className="font-large text-18">Sun Challegene</div>
                </div>
              </Hidden>
            </div>
          </Grid>
          <Grid item md={5}xs={7}>
          <div className="flex justify-end items-center text-muted text-16">
            Completed: 
          {format(new Date().getTime(), " MM/dd/yyyy   ")}
          </div>
          </Grid>
          <Grid item md={2}xs={3}>
            <div className="flex justify-end">
            <CustomizedDialog/>
            </div>
          </Grid>
        </Grid>
      </Card>
      <div className="py-2" />
    </Fragment>
);
};

export default ChallengeCard1;
