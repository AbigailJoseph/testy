import React from "react";

const pagesRoutes = [
  {
    path: "/pages/start-studying-page",
    component: React.lazy(() => import("./StartStudyingPage")),
  },
  {
    path: "/pages/groups-page",
    component: React.lazy(() => import("./GroupsPage")),
  },
  {
    path: "/pages/challenges-page",
    component: React.lazy(() => import("./ChallengesPage")),
  },
  {
    path: "/pages/badges-page",
    component: React.lazy(() => import("./BadgesPage")),
  },
  {
    path: "/pages/faq-1",
    component: React.lazy(() => import("./Faq1")),
  },
  {
    path: "/pages/faq-2",
    component: React.lazy(() => import("./Faq2")),
  },
];

export default pagesRoutes;
