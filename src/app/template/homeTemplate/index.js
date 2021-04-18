import React, { Fragment } from "react";
import { Route } from "react-router-dom";

import Footer from "../../components/footer";
import Navbar from "../../components/navbar";


export const HomeTemplate = ({ Component, ...restProps }) => {
  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        return (
          <Fragment>
            <Navbar />
            <Component {...propsRoute} />
            <Footer />

          </Fragment>
        );
      }}
    />
  );
};
