import React, { Fragment } from "react";
import { Grid } from "@material-ui/core";
import TotalHours from "./shared/TotalHours";
import PieChart from "./shared/PieChart";
import RowCards from "./shared/RowCards";
import StatCards2 from "./shared/StatCards2";
import FokusIcon from "./shared/FokusIcon";
import { useTheme } from "@material-ui/styles";
import StartStudyingButton from "./shared/StartStudyingButton";

const Analytics = () => {
  const theme = useTheme();

  return (
    <Fragment>
      <div className="pb-24 pt-7 px-8 ">
        <div className="  text-black  text-40 font-medium">
          Welcome [Name]!
        </div>
      </div>
      <div className="analytics m-sm-30 mt--18">
        <Grid container justify="flex-start" direction = "row">
        <Grid item lg={4} md={4} sm={8} xs={8}>   
            <FokusIcon />
            <StartStudyingButton/>
            </Grid>
        <Grid item lg={8} md={8} sm={12} xs={12}>
            <TotalHours />
            <PieChart/>
          </Grid>
          
          <Grid item lg={8} md={8} sm={12} xs={12}>
            {/* Top Selling Products */}
            <h4 className="card-title text-muted mb-4">Completed Challenges</h4>
            <RowCards />
          </Grid>
        </Grid>
      </div>
    </Fragment>
  );
};

export default Analytics;
