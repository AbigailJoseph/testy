import React, { Fragment } from "react";
import { Grid} from "@material-ui/core";
import TopInfoCards from "./shared/TopInfoCards";
import PieChart from "./shared/PieChart";
import ChallengeCard1 from "./shared/ChallengeCard1";
import ChallengeCard2 from "./shared/ChallengeCard2";
import { useTheme } from "@material-ui/styles";

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
        <Grid container spacing  = {3}  justify= "flex-start" direction = "row">
        <Grid item lg={8} md={8} sm={12} xs={12}>   
            <TopInfoCards />
            <h4 className="card-title text-muted mb-4">Recently Completed Challenges</h4>
            <ChallengeCard1 />
            <ChallengeCard2 />
            </Grid>
        <Grid item lg={4} md={4} sm={12} xs={12}>
            <PieChart/>
          </Grid>
        
        </Grid>
      </div>
    </Fragment>
  );
};

export default Analytics;
