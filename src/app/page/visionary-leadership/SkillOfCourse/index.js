import React from "react";

import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";

// import media
import icon01 from "assets/images/SkillOfCourse/skillOfCourse01.png";
import icon02 from "assets/images/SkillOfCourse/skillOfCourse02.png";
import icon03 from "assets/images/SkillOfCourse/skillOfCourse03.png";
import icon04 from "assets/images/SkillOfCourse/skillOfCourse04.png";
import icon05 from "assets/images/SkillOfCourse/skillOfCourse05.png";
import icon06 from "assets/images/SkillOfCourse/skillOfCourse06.png";

import "./styles/styles.scss";

const skillOfCourse = [
  {
    id: 1,
    icon: icon01,
    title: "",
    desc: "Lập lại chiến lược, mục tiêu dài hạn, bắt đầu với Tầm nhìn & Kế hoạch hấp dẫn",
    url: "",
  },
  {
    id: 2,
    icon: icon02,
    title: "",
    desc: "Nâng cao tinh thần lãnh đạo của bạn để truyền cảm hứng",
    url: "",
  },
  {
    id: 3,
    icon: icon03,
    title: "",
    desc: "Trẻ hóa Động lực Nội tại của các thành viên trong Nhóm của bạn",
    url: "",
  },
  {
    id: 4,
    icon: icon04,
    title: "",
    desc: "Tạo ra một nền văn hóa với kỷ luật tiêu chuẩn quân đội",
    url: "",
  },
  {
    id: 5,
    icon: icon05,
    title: "",
    desc: "Tập trung, linh hoạt & hoàn toàn bị ám ảnh về việc đạt được mục tiêu",
    url: "",
  },
  {
    id: 6,
    icon: icon06,
    title: "",
    desc: "Học về tâm lý học trong kinh doanh",
    url: "",
  },
];

function SkillOfCourse() {
  return (
    <div className="skillOfCourse py-5">
      <div className="container">
        <Zoom bottom cascade>
          <h2 className="mb-5">Kỹ Năng Từ Khóa Học</h2>
        </Zoom>
        <div className="row">
          {skillOfCourse.map((ele, index) => {
            return (
              <Fade left cascade key={index}>
                <div className="col-12 col-md-6 col-lg-4 ">
                  <div className="details my-4">
                    <div className="icon">
                      <img
                        src={ele.icon}
                        className="img-fluid"
                        alt={ele.icon}
                      />
                    </div>

                    <div className="description">
                      <h3>{ele.title}</h3>
                      <p>{ele.desc}</p>
                    </div>
                  </div>
                </div>
              </Fade>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SkillOfCourse;
