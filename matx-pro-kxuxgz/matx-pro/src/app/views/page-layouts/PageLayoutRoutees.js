import React from 'react';

const pageLayoutRoutes = [
  {
    path: "/page-layouts/simple-table-school",
    component: React.lazy(() => import("./SimpleTableSchool"))
  },
  {
    path: "/page-layouts/simple-table-grade",
    component: React.lazy(() => import("./SimpleTableGrade"))
  },
  {
    path: "/page-layouts/leader-board-school",
    component: React.lazy(() => import("./LeaderBoardSchool"))
  },
  {
    path: "/page-layouts/leader-board-grade",
    component: React.lazy(() => import("./LeaderBoardGrade"))
  }
];

export default pageLayoutRoutes;
