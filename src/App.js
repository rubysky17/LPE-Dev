import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { HomeTemplate } from "app/template/homeTemplate";
import ErrorPage from "./app/page/error/";
import RunFaster from "./app/page/runFaster";


function App() {
  return (
    <Router>
      <Switch>
        <HomeTemplate exact Component={RunFaster} />

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
