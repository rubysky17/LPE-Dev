import React from "react";

import { Carousel } from "react-responsive-carousel";

import ava1 from "assets/images/tesno/ava1.jpg";
import ava2 from "assets/images/tesno/ava2.jpg";
import ava3 from "assets/images/tesno/ava3.jpg";

import "./styles/styles.scss";

function Testimonior() {
  const persons = [
    {
      name: "Anh Thái Tuấn",
      ava: ava1,
      comment:
        "Tôi vô cùng biết ơn thầy Vas và cô Giang Thanh, như là hai người soi sáng cho tôi vượt qua giai đoạn kinh khủng nhất của cuộc đời. Nếu không có thầy và cô, bây giờ không biết tôi đang sống khổ sở ở chỗ nào.",
    },
    {
      name: "Chị Anh Chi",
      ava: ava2,
      comment:
        "Công ty của tôi từng bị phá sản. Tôi mất hết động lực sống. Tôi đổ lỗi cho mọi thứ. Nhưng sau đó may mắn gặp thầy, bây giờ tôi đã tạo dựng doanh nghiệp mới và kinh doanh vẫn phát triển dù có biến cố xảy ra. Tôi vô cùng biết ơn thầy!",
    },
    {
      name: "Anh Hữu Phương",
      ava: ava3,
      comment:
        "2 năm qua đến nay mọi thứ đều thay đổi, từ mối quan hệ, đến sức khoẻ, đặc biệt là việc kinh doanh của mình. Tôi nhận ra trước giờ lúc nào mình cũng cứ chăm châm vào tiền mà không biết xây dựng mục tiêu, tầm nhìn dài hạn. Bây giờ tiền đến với tôi còn gấp nhiều lần hơn trước mà tôi vẫn rất khoẻ mạnh, hạnh phúc.",
    },
  ];
  return (
    <div className="bg-testimonior">
      <div className="opacity-bg "></div>
      <div className="container">
        <div className="row">
          <div className="col-12 wrapper-container">
            <h1>Đánh giá học viên</h1>
          </div>
          <div className="col-12 wrapper-carousel">
            <Carousel
              showArrows={false}
              showThumbs={false}
              swipeable={true}
              showStatus={false}
              autoPlay={false}
            >
              {persons.map((per, index) => {
                return (
                  <div className="row my-5 slide-item" key={index}>
                    <div className="col-12 col-md-8 text-center">
                      <img src={per.ava} alt={per.ava} className="ava-item" />
                      <h2>{per.name}</h2>
                      <p className="mb-4">{per.comment}</p>
                    </div>
                  </div>
                );
              })}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonior;
