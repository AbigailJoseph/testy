import React from "react";

const ListRoute = [
  {
    path: "/daily-challenge-1",
    exact: true,
    component: React.lazy(() => import("./DailyChallenge1"))
  },
  {
    path: "/daily-challenge-2",
    exact: true,
    component: React.lazy(() => import("./DailyChallenge2"))
  },
  {
    path: "/challenge-confirmation",
    exact: true,
    component: React.lazy(() => import("./ChallengeConfirmation")),
  },
];

export default ListRoute;
