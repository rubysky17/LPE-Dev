import React from "react";
import { Carousel } from "react-responsive-carousel";
import Fade from "react-reveal/Fade";

import JC01 from "assets/images/journeyCourse/journeyCourse01.jpeg";
import JC02 from "assets/images/journeyCourse/journeyCourse02.jpeg";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./styles/styles.scss";

const dayOne = [
  "Một cái cây muốn cao lớn toả bóng mát thì cần phải có gốc rễ khoẻ mạnh. Gốc rễ vững chắc sẽ giúp cây không bị những tác động ngoại lực ảnh hướng tới.",
  "Khi những biến cố xảy đến, những doanh nghiệp vừa & nhỏ luôn chật vật vì chịu ảnh hưởng trực tiếp lên doanh thu, nguồn nhân lực, nguồn cung ứng,…",
  "Biến cố tác động mạnh mẽ khiến các doanh nghiệp vừa & nhỏ khiến họ buộc phải đưa ra quyết định tạm thời đóng cửa, nhưng tất cả sẽ là bài học cho sự khởi đầu mới.",
  "Hầu hết mọi người quyết định kinh doanh vì thích một ngành nghề nào đó, hoặc có khả năng trong lĩnh vực bất kỳ. Nhưng tại thời điểm này, bất kỳ công ty nào muốn đứng",
  "Kế hoạch hành động chi tiết sẽ giữ bạn không lạc ra khỏi quỹ đạo ngay từ ban đầu của mình và bám sát mục tiêu hiệu quả hơn.",
];

const dayTwo = [
  "Không thể ép buộc nhân viên trung thành với sếp, cũng không thể hứa hẹn cam kết điều gì. Nhưng sẽ luôn có cách để họ đồng lòng cùng bạn vượt qua những giai đoạn khó khăn này.",
  "Những binh lính ở quân đội chưa bao giờ ngừng việc tin tưởng người chỉ huy & hết mình chiến đấu cho tổ quốc của họ. Học cách áp dụng tinh thần kiên cường của quân đội vào đội nhóm của mình.",
  "Học cách áp dụng tính kỷ luật của quân đội vào đội nhóm của mình.",
  "Quân đội không chỉ giành chiến thắng bằng các chiến lược đỉnh cao & sức khoẻ bền bĩ, quân đội còn giành thắng lợi nhờ vào tinh thần bất khuất của họ. Học cách để tạo dựng văn hoá riêng của công ty/ doanh nghiệp của bạn.",
  "Khi bạn đã có được tầm nhìn, bảng kế hoạch & những người đồng đội. Yếu tố sáng tạo sẽ giúp mọi thứ được thực hiện hiệu quả hơn, rút ngắn thời gian.",
];

function JourneyCourse() {
  return (
    <div className="journeyCourse  area-pd">
      <div className="container area-pt">
        <h2>HÀNH TRÌNH XÂY DỰNG TẦM NHÌN LÃNH ĐẠO</h2>
        <Carousel
          showArrows={false}
          showThumbs={false}
          swipeable={true}
          showStatus={false}
          autoPlay={false}
        >
          <div className="row my-5">
            <div className="col-12">
              <button className="button-day">Ngày 1</button>
            </div>
            <div className="row wrapper-info">
              <div className="col-12 col-md-6">
                <Fade left opposite>
                  <img src={JC01} alt={JC01} className="img-fluid" />
                </Fade>
              </div>

              <div className="col-12 col-md-6 wrapper-text">
                <Fade left opposite>
                  {dayOne.map((item, index) => {
                    return (
                      <p className="mb-4" key={index}>
                        + {item}
                      </p>
                    );
                  })}
                </Fade>
              </div>
            </div>
          </div>

          <div className="row my-5">
            <div className="col-12">
              <button className="button-day">Ngày 2</button>
            </div>
            <div className="row wrapper-info">
              <div className="col-12 col-md-6">
                <Fade left opposite>
                  <img src={JC02} alt={JC02} className="img-fluid" />
                </Fade>
              </div>

              <div className="col-12 col-md-6 wrapper-text">
                <Fade left opposite>
                  {dayTwo.map((item, index) => {
                    return (
                      <p className="mb-4" key={index}>
                        + {item}
                      </p>
                    );
                  })}
                </Fade>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default JourneyCourse;
