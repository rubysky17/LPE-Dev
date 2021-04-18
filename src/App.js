import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import useWindowDimensions from "./core/hooks/useWindowDimensions";

import { HomeTemplate } from "app/template/homeTemplate";

// import {
//   publicRoutes,
//   privateRoutes,
//   publicPaths,
//   privatePaths,
// } from "../src/app/config/routes/routes";

import ErrorPage from "./app/page/error/";
import HomePage from "./app/page/home/";

function App() {
  const { height } = useWindowDimensions()

  useEffect(() => {
    console.log(height)
  }, [])

  return (
    <Router>
      <Switch>
        <HomeTemplate exact path="/" Component={HomePage} />

        <Route path="*">
          <Switch>
            <Route component={ErrorPage} />
          </Switch>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
