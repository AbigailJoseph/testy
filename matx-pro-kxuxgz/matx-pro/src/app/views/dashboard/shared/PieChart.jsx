import React, { Fragment } from "react";
import { Grid, Card } from "@material-ui/core";
import DoughnutChart from "../../charts/echarts/Doughnut";
import { useTheme } from "@material-ui/styles";

const PieChart = () => {
  const theme = useTheme();


  return (
    <Fragment>
            <Card className="px-6 py-4 mb-6">
              <div className="card-title">My Time Spent</div>
              <div className="card-subtitle">This Week</div>
              <DoughnutChart
                height="300px"
                color={[
                  theme.palette.primary.dark,
                  theme.palette.primary.main,
                  theme.palette.primary.light,
                ]}
              />
             </Card>
       </Fragment>
  );
};

export default PieChart;
