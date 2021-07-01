import React from "react";
import { Link } from "react-router-dom";

import "./styles/styles.scss";

function Card({ level, ...course }) {
  const { picture, title, id, priceNew, priceOld } = course;

  return (
    <div className="mt-4 mr-4">
      <div
        className="wrapper-card"
        style={{
          color: "#fff",
          backgroundImage: `url(${picture})`,
        }}
      >
        <div className="overlay"></div>
        <div className="content-card">
          <p className="card-title">{title}</p>

          <div className="content-price row my-1 mx-0">
            <div className="col-6  px-0">
              <p className="content-price_new">{priceNew.toLocaleString()} đ</p>
              <p className="content-price_old">{priceOld.toLocaleString()} đ</p>
            </div>

            <div className="col-6 wrapper-btn px-0">
              <Link
                to={`/course/${level}/${id}`}
                style={{
                  textDecoration: "none",
                }}
              >
                <button
                  className="btn-course"
                  style={{
                    color: "#fff",
                    borderColor: "#fff",
                  }}
                >
                  Nhận
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;