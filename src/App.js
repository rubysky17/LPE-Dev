import React from "react";
import { BrowserRouter as Router, Switch,Route } from "react-router-dom";

import RunFaster from "./app/page/runFaster";
import RegisterPage from "app/page/register";



function App() {
  

  return (
    <Router>
      <Switch>
        <Route exact path="/run-faster">
          <RunFaster />
        </Route>

        <Route exact path="/dang-ky">
          <RegisterPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
