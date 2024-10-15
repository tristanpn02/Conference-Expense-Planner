import React from "react";
import LandingPage from "./Pages/Landing";
import PlannerPage from "./Pages/Planner";

const routesConfig = [
    { path: '/home', title: 'Home', component: <LandingPage />, navbar: true },
    { path: '/planner', title: 'Planner', component: <PlannerPage />, navbar: true},
];

export default routesConfig;