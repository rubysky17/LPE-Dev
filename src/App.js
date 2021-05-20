import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import BeautyFromWomen from "app/page/bfw";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/beauty-from-within">
          <BeautyFromWomen />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
