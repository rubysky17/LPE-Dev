import React, { useEffect } from "react";
import { WOW } from "wowjs";
import { BrowserRouter as Router, Switch,Route } from "react-router-dom";

import { HomeTemplate } from "app/template/homeTemplate";
import RunFaster from "./app/page/runFaster";
import RegisterPage from "app/page/register";

function App() {
  useEffect(() => {
    const wow = new WOW({
      offset: 100,
      mobile: false,
      live: true,
    });

    wow.init();
  }, []);

  return (
    <Router>
      <Switch>
        <HomeTemplate exact path="/run-faster" Component={RunFaster} />

        <Route exact path="/dang-ky">
          <RegisterPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
