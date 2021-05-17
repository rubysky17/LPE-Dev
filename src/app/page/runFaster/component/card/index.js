import React from "react";

import "./styles/styles.scss";
function Card({ name }) {
  return (
    <>
      {name === "register" && (
        <div className="card-content">
          <h1 className="card-title">Bạn đã sẵn sàng?</h1>
          <p className="card-desc">
            Trở nên nhận thức hơn về biến cố đang diễn ra ngay trong cuộc sống
            của chúng ta & tìm cho mình một hướng đi mới, đúng đắn, phù hợp &
            đem lại nguồn thu hiệu quả.
          </p>
          <a
            href="https://lpe.vn/dang-ky-run-faster/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="card-register">Đăng ký</button>
          </a>
        </div>
      )}

      {name === "info" && (
        <div className="card-content">
          <p className="card-content_text">
            Ngày ngày học: <span>27.05.2021 – 28.05.2021</span>
          </p>
          <p className="card-content_text">
            Thời gian: <span>18h30 – 22h30</span>
          </p>
          <p className="card-content_text">
            Hình thức: <span>Học truyền hình trực tiếp</span>
          </p>
        </div>
      )}
    </>
  );
}

export default Card;

                   
                 
                  
                   
                 
                  
                   
                 
                  
                   
                 
                  
                   
                 
                  
                   
                 
                  
                   
                 
                  
                   
                 
                  
                   
                 
                  