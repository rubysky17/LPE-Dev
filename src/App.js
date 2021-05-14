import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import { HomeTemplate } from "app/template/homeTemplate";
import RunFaster from "./app/page/runFaster";

function App() {
  return (
    <Router>
      <Switch>
        <HomeTemplate exact Component={RunFaster} />
      </Switch>
    </Router>
  );
}

export default App;
