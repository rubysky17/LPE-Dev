import React from "react";
import { Route } from "react-router-dom";

export const HomeTemplate = ({ Component, ...restProps }) => {
  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        return (
          <>
            <div>
              <Component {...propsRoute} />
            </div>
          </>
        );
      }}
    />
  );
};
