import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { HomeTemplate } from "app/template/homeTemplate";

import Home from "app/page/home";
import CourseDetail from "app/page/courseDetail";
import Chechkout from "app/page/checkout";

function App() {
  return (
    <Router>
      <Switch>
        <HomeTemplate exact Component={Home} path="/" />
        <HomeTemplate exact Component={CourseDetail} path="/course/:id" />
        <HomeTemplate exact Component={Chechkout} path="/checkout/:id" />
      </Switch>
    </Router>
  );
}

export default App;
