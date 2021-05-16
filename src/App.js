import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomeTemplate } from "app/template/homeTemplate";

import CourseOne from "./app/page/courseOne/";

function App() {
  return (
    <Router>
      <Switch>
        <HomeTemplate exact Component={CourseOne} />
      </Switch>
    </Router>
  );
}

export default App;
