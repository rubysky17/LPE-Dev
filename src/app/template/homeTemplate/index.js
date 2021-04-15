import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";

// import { USER_LOGIN } from "../Ultity/ConfigWeb";

export const HomeTemplate = ({ Component, ...restProps }) => {
  //   const isLogin = localStorage.getItem(USER_LOGIN);

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
