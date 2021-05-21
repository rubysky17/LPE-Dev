import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomeTemplate } from "app/template/homeTemplate";

// import CourseOne from "./app/page/courseOne/";

import Visionary from "./app/page/visionary-leadership";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/visionary-leadership" exact component={Visionary}/>
      </Switch>
    </Router>
  );
}

export default App;
