import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomeTemplate } from "app/template/homeTemplate";

import Home from "app/page/home";
import CourseDetail from "app/page/courseDetail";
import Chechkout from "app/page/checkout";
import ScrollToTop from "app/components/scrolltotop";
import ErrorPage from "app/page/error";
import QueryPage from "app/page/query";

function App() {
  return (
    <Router>
      <ScrollToTop />

      <Switch>
        <HomeTemplate exact Component={Home} path="/" />

        <HomeTemplate
          exact
          Component={CourseDetail}
          path="/course/:level/:id"
        />

        <HomeTemplate
          exact
          Component={Chechkout}
          path="/checkout/:level/:id/"
        />

        <HomeTemplate
          exact
          Component={Chechkout}
          path="/checkout/:level/:id/:subId"
        />

        <HomeTemplate exact Component={QueryPage} path="/truyvan" />
        <Route path="*" component={ErrorPage} />
      </Switch>
    </Router>
  );
}

export default App;
