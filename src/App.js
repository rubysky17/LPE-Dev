import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { HomeTemplate } from "app/template/homeTemplate";
import ErrorPage from "./app/page/error/";
import RunFaster from "./app/page/runFaster";
// import ThankYouPage from "app/page/thankYou";


function App() {
  return (
    <Router>
      <Switch>
        <HomeTemplate exact path="/run-faster" Component={RunFaster} />
        {/* <HomeTemplate exact path="/thank-you" Component={ThankYouPage} /> */}
;
        {/* <Route path="*">
          <Switch>
            <Route exact path="/thank-you">
              <ThankYouPage />x
            </Route>
            
            <Route component={ErrorPage} />
          </Switch>
        </Route> */}
        
      </Switch>
    </Router>
  );
}

export default App;
                             ;                                   ;                                   ;                                   ;                                   ;                                   ;                                   ;      