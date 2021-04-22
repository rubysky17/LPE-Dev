import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { HomeTemplate } from "app/template/homeTemplate";

// import {
//   publicRoutes,
//   privateRoutes,
//   publicPaths,
//   privatePaths,
// } from "../src/app/config/routes/routes";

import ErrorPage from "./app/page/error/";
import CourseOne from "./app/page/courseOne/";

function App() {
  return (
    
    <Router>
      <Switch>
        <HomeTemplate exact Component={CourseOne} />

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
