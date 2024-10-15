import React from "react";
import LandingPage from "./Pages/Landing";
import VenuePage from "./Pages/Venue";

const routesConfig = [
    { path: '/home', title: 'Home', component: <LandingPage />, navbar: true },
    { path: '/venue', title: 'Venue', component: <VenuePage />, navbar: true},
];

export default routesConfig;