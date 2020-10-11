import React from "react";
import { authRoles } from "../../auth/authRoles";

const HomeRoutes = [
  {
    path: "/dashboard/Analytics",
    component: React.lazy(() => import("./HomePage")),
    auth: authRoles.admin,
  },
];

export default HomeRoutes;
