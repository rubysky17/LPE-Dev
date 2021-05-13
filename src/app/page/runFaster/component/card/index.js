import React from "react";
import "./styles/styles.scss";
function Card({ name }) {
  return (
    <>
      {name === "register" && (
        <div className="card-content">
          <h1 className="card-title">Bạn đã sẵn sàng?</h1>
          <p className="card-desc">
            The plans you refer to will soon be back in our hands. Alderaan? I'm
            not going to Alderaan. I've got to go home.
          </p>
          <button className="card-register">
            <a href="/">Đăng ký</a>
          </button>
        </div>
      )}

      {name === "info" && (
        <div className="card-content">
          <p>Mgày bắt đầu</p>
          <p>Thời gian</p>
          <p>Hình thức</p>
        </div>
      )}
    </>
  );
}

export default Card;
