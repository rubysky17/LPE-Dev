import React from "react";
import { BrowserRouter as Router, Switch,Route } from "react-router-dom";

import RunFaster from "./app/page/runFaster";



function App() {
  

  return (
    <Router>
      <Switch>
        <Route exact path="/run-faster">
          <RunFaster />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
