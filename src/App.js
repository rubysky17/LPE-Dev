import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import RegisterPage from "./app/page/dangky";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/dang-ky-run-faster">
          <RegisterPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
