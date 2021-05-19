import React from "react";
import { Route } from "react-router-dom";

import "./styles/styles.scss";

export const HomeTemplate = ({ Component, ...restProps }) => {
  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        return (
          <>
            <div className="bg-gradient">
              <Component {...propsRoute} />
            </div>
          </>
        );
      }}
    />
  );
};
