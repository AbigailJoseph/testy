import React from "react";

const pagesRoutes = [
  {
    path: "/pages/start-studying-page",
    component: React.lazy(() => import("./StartStudyingPage")),
  },
  {
    path: "/pages/study-confirmation",
    component: React.lazy(() => import("./StudyConfirmation")),
  },
  {
    path: "/pages/start-studying-page",
    component: React.lazy(() => import("./StartStudyingPage")),
  },
  {
    path: "/pages/leader-board",
    component: React.lazy(() => import("./LeaderBoard")),
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
