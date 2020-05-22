import React, { lazy } from "react";

const ResumePage = lazy(() => import("@furkanyilmazx/pages/ResumePage"));

export const routes = [
  {
    id: "resume",
    path: "/",
    exact: true,
    component: ResumePage,
    loading: <div />,
  },
];
