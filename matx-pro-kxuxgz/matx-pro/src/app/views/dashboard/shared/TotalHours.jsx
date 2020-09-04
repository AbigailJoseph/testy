import React from "react";
import { Grid, Card, Icon, IconButton, Tooltip } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  icon: {
    fontSize: "44px",
    opacity: 0.6,
    color: palette.primary.main,
  },
}));

const TotalHours = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={3} className="mb-3" justify="flex-end">
      <Grid item xs={12} md={6}>
        <Card
          className="flex flex-wrap justify-center items-center p-sm-24 bg-paper"
          elevation={6}
        >
          <div className="flex items-center">
            <Icon className={classes.icon}>access_time</Icon>
            <div className="ml-3">
              <large className="text-muted center text-20">Total Hours This Week</large>
              <h6 className="m-0 center mt-1 text-secondary text-14 font-medium">8</h6>
            </div>
          </div>
        </Card>
      </Grid>
    </Grid>
  );
};

export default TotalHours;
