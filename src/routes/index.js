// import About from "../Pages/About";
// import Home from "../Pages/Home";

import React from "react";

const Home = React.lazy(() => import("../Pages/Home"));
const About = React.lazy(() => import("../Pages/About"));
console.log("Home", Home);

const routes = [
  {
    path: "/home",
    name: "home",
    element: <Home></Home>,
  },
  {
    path: "/about",
    name: "about",
    element: <About></About>,
  },
];

export default routes;
