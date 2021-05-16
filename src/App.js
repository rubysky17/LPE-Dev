import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomeTemplate } from "app/template/homeTemplate";

import ThankYouPage from "app/page/thankyou";

function App() {
  return (
    <Router>
      <Switch>
        <HomeTemplate exact Component={ThankYouPage} />
      </Switch>
    </Router>
  );
}

export default App;
