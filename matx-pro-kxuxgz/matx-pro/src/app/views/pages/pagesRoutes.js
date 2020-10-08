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
    path: "/pages/badges-page",
    component: React.lazy(() => import("./BadgesPage")),
  },
  {
    path: "/pages/challenges-page",
    component: React.lazy(() => import("./ChallengesPage")),
  },
  {
    path: "/pages/leader-board-page",
    component: React.lazy(() => import("./LeaderBoardPage")),
  },
  {
    path: "/pages/my-badges-page",
    component: React.lazy(() => import("./MyBadgesPage")),
  },
  {
    path: "/pages/faq-2",
    component: React.lazy(() => import("./Faq2")),
  },
];

export default pagesRoutes;
