import React from "react";
import { Route } from "react-router-dom";

import Footer from "../../components/footer";

import "./styles/styles.scss";

export const HomeTemplate = ({ Component, ...restProps }) => {
  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        return (
          <>
            <div>
              <Component {...propsRoute} />
              {/* <Footer /> */}
            </div>
          </>
        );
      }}
    />
  );
};
