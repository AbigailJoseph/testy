import React from "react";

const pagesRoutes = [
  {
    path: "/pages/user-list-1",
    component: React.lazy(() => import("./UserList1")),
  },
  {
    path: "/pages/user-list-2",
    component: React.lazy(() => import("./UserList2")),
  },
  {
    path: "/pages/user-list-3",
    component: React.lazy(() => import("./UserList3")),
  },
  {
    path: "/pages/user-list-4",
    component: React.lazy(() => import("./UserList4")),
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
