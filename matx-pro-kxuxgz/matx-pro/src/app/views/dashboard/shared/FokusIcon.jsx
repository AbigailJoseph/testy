import React from "react";
import { Card, Button } from "@material-ui/core";

const FokusIcon = () => {
  return (
    <Card className="p-sm-24 mb-6">
      <Card
        elevation={0}
        className="box-shadow-none text-center relative bg-light-primary p-sm-24"
      >
        <img src="/assets/images/illustrations/FokusTheFox.svg" alt="upgrade" />
      </Card>
    </Card>
  );
};

export default FokusIcon;
