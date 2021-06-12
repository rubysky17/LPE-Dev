import React from "react";
import { Link, NavLink } from "react-router-dom";

import "./styles/styles.scss";

function Header() {
  return (
    <div className="header">
      <div className="container content_header">
        <div className="logo">
          <Link to="/">
            <img
              src="https://lpe.vn/storage/logo/lpe-nlp-logo.png"
              alt="https://lpe.vn/storage/logo/lpe-nlp-logo.png"
              className="img-fluid"
            />
          </Link>
        </div>

        <div className="menu">
          <ul>
            <li>
              <NavLink to="/">Trang chủ</NavLink>
            </li>

            <li>
              <NavLink
                to="/course"
                activeStyle={{
                  fontWeight: "bold",
                  color: "red",
                }}
              >
                Khóa học
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
