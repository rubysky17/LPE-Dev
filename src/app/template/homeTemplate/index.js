import React from "react";
import { Route } from "react-router-dom";

import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import warningPic from "assets/images/warning.jpg";

import "./styles/styles.scss";

export const HomeTemplate = ({ Component, ...restProps }) => {
  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        return (
          <>
            <div className="bg-gradient">
              <Navbar />
              <Component {...propsRoute} />
              <Footer />
            </div>

            <div className="modal-dark">
              <div className="container img-warning">
                <div
                  className="row"
                  style={{
                    justifyContent: "center",
                  }}
                >
                  <div className="col-lg-8 col-md-10 col-11">
                    <img
                      src={warningPic}
                      alt={warningPic}
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      }}
    />
  );
};
