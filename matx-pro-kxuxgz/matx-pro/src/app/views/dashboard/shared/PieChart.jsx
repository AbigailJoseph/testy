import React, { Fragment } from "react";
import { Grid, Card } from "@material-ui/core";
import DoughnutChart from "../../charts/echarts/Doughnut";
import { useTheme } from "@material-ui/styles";

const PieChart = () => {
  const theme = useTheme();


  return (
    <Fragment>
        <Grid container spacing={3}  justify="flex-end">
          <Grid item md={6} xs={12}>
            <Card className="px-6 py-4 mb-6">
              <div className="card-title">Traffic Sources</div>
              <div className="card-subtitle">Last 30 days</div>
              <DoughnutChart
                height="300px"
                color={[
                  theme.palette.primary.dark,
                  theme.palette.primary.main,
                  theme.palette.primary.light,
                ]}
              />
             </Card>
             </Grid>
             </Grid>
       </Fragment>
  );
};

export default PieChart;
