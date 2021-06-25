import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { HomeTemplate } from "app/template/homeTemplate";

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
