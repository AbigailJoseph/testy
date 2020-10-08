import React from "react";
import { Card, Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SimpleMenu2 from "../material-kit/menu/SimpleMenu2";
import clsx from "clsx";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  badgesCard: {
    borderRadius: 20,
    "& h5": {
      letterSpacing: 3,
    },
    "& h1": {
      lineHeight: 1,
    },
    "& .image-box-overlay": {
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      background: "rgba(0, 0, 0, 0.74)",
      zIndex: 2,
      opacity: 0,
      transition: "all 250ms ease-in-out",
    },
    "&:hover": {
      "& .image-box-overlay": {
        opacity: 1,
      },
    },
  },
}));

const MyBadgesPage = () => {
  const classes = useStyles();

  return (
    <div className="m-sm-30 relative">
      <div className=" justify-center text-black text-40 font-medium">
           My Badges < SimpleMenu2/> 
      </div>
      <div className=" justify-center text-muted-white  text-20 font-medium">
          
      </div>
      <div>
        <Grid container spacing={6}>
          {planList.map((item, ind) => (
            <Grid key={item.title} item lg={4} md={4} sm={4} xs={12}>
              <Card
                elevation={6}
                className={clsx(
                  "card text-center p-sm-24",
                  classes.badgesCard
                )}
              >
              <div className="flex justify-center items-center relative">
                <img
                  className="mb-4 h-152 w-152"
                  src={item.image}
                  alt={item.title}
                />
                <div className="image-box-overlay flex justify-center items-center">
                <h5 className="m-0 text-primary font-light">
                    {item.description}
                  </h5>
                </div>
                </div>
                <div className="p-6">
                  <h5 className="m-0 text-primary uppercase font-light">
                    {item.title}
                  </h5>
                </div>
                
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

const planList = [
  {
    title: "the astronomer",
    image: "/assets/images/illustrations/astronomer2.svg",
    description: "You can collect this badge by completing the Star Challenge",
  },
  {
    title: "illuminator",
    image: "/assets/images/illustrations/illuminator2.svg",
    description: "You can collect this badge by completing the Sun Challenge",
  },
];
export default MyBadgesPage;