import React, { useState, useRef } from "react";
import Modal from "react-modal";
import "./styles/styles.scss";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    transition: "all 0.3s",
  },
};

const dayOne = [
 "Một cái cây muốn cao lớn toả bóng mát thì cần phải có gốc rễ khoẻ mạnh. Gốc rễ vững chắc sẽ giúp cây không bị những tác động ngoại lực ảnh hướng tới.",
 "Khi những biến cố xảy đến, những doanh nghiệp vừa & nhỏ luôn chật vật vì chịu ảnh hưởng trực tiếp lên doanh thu, nguồn nhân lực, nguồn cung ứng,…",
 "Biến cố tác động mạnh mẽ khiến các doanh nghiệp vừa & nhỏ khiến họ buộc phải đưa ra quyết định tạm thời đóng cửa, nhưng tất cả sẽ là bài học cho sự khởi đầu mới.",
 "Hầu hết mọi người quyết định kinh doanh vì thích một ngành nghề nào đó, hoặc có khả năng trong lĩnh vực bất kỳ. Nhưng tại thời điểm này, bất kỳ công ty nào muốn đứng",
 "Kế hoạch hành động chi tiết sẽ giữ bạn không lạc ra khỏi quỹ đạo ngay từ ban đầu của mình và bám sát mục tiêu hiệu quả hơn."
]

const dayTwo = [
 "Không thể ép buộc nhân viên trung thành với sếp, cũng không thể hứa hẹn cam kết điều gì. Nhưng sẽ luôn có cách để họ đồng lòng cùng bạn vượt qua những giai đoạn khó khăn này.",
 "Những binh lính ở quân đội chưa bao giờ ngừng việc tin tưởng người chỉ huy & hết mình chiến đấu cho tổ quốc của họ. Học cách áp dụng tinh thần kiên cường của quân đội vào đội nhóm của mình.",
 "Học cách áp dụng tính kỷ luật của quân đội vào đội nhóm của mình.",
 "Quân đội không chỉ giành chiến thắng bằng các chiến lược đỉnh cao & sức khoẻ bền bĩ, quân đội còn giành thắng lợi nhờ vào tinh thần bất khuất của họ. Học cách để tạo dựng văn hoá riêng của công ty/ doanh nghiệp của bạn.",
 "Khi bạn đã có được tầm nhìn, bảng kế hoạch & những người đồng đội. Yếu tố sáng tạo sẽ giúp mọi thứ được thực hiện hiệu quả hơn, rút ngắn thời gian."
]


const Slide = ({ slide, current, handleSlideClick }) => {
  const [openModal, setOpenModal] = useState(false);
  const [content, setContent] = useState(dayOne)
  const { src, button, headline, index } = slide;
  const slideRef = useRef();

  let classNames = "slide";

  if (current === index) classNames += " slide--current";
  else if (current - 1 === index) classNames += " slide--previous";
  else if (current + 1 === index) classNames += " slide--next";

  const handleMouseMove = (event) => {
    const el = slideRef.current;
    const r = el.getBoundingClientRect();

    el.style.setProperty(
      "--x",
      event.clientX - (r.left + Math.floor(r.width / 2))
    );
    el.style.setProperty(
      "--y",
      event.clientY - (r.top + Math.floor(r.height / 2))
    );
  };

  const handleMouseLeave = (event) => {
    slideRef.current.style.setProperty("--x", 0);
    slideRef.current.style.setProperty("--y", 0);
  };

  const onHandleSlideClick = (event) => {
    handleSlideClick(slide.index);
  };

  function imageLoaded(event) {
    event.target.style.opacity = 1;
  }

  const handleModal = (index) => {
    setOpenModal(!openModal);
    
    index === 0 ? setContent(dayOne) : setContent(dayTwo)
  };

  return (
    <li
      ref={slideRef}
      className={classNames}
      onClick={onHandleSlideClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="slide__image-wrapper">
        <img
          className="slide__image"
          alt={src}
          src={src}
          onLoad={imageLoaded}
        />
      </div>

      <article className="slide__content">
        <h2 className="slide__headline">{headline}</h2>
        <button
          className="slide__action btn-detail"
          onClick={() => {
            handleModal(index);
          }}
        >
          {button}
        </button>
      </article>

      <Modal
        isOpen={openModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="wrapper-modal">
          <div className="wrapper-button">
            <button onClick={handleModal} className="button-modal">
              Đóng
            </button>
          </div>

          <div className="wrapper-text">
           {content.map((item, index) => {
             return <p className='mb-3' key={index}>
               + {item}
             </p>
           })}
          </div>
        </div>
      </Modal>
    </li>
  );
};

function Slider({ heading, slides }) {
  const [current, setCurrent] = useState(0);

  const headingId = `slider-heading__${heading
    .replace(/\s+/g, "-")
    .toLowerCase()}`;
  const wrapperTransform = {
    transform: `translateX(-${current * (100 / slides.length)}%)`,
  };

  const handleSlideClick = (index) => {
    if (current !== index) {
      setCurrent(index);
    }
  };

  return (
    <div className="slider" aria-labelledby={headingId}>
      <ul className="slider__wrapper" style={wrapperTransform}>
        {slides.map((slide) => {
          return (
            <Slide
              key={slide.index}
              slide={slide}
              current={current}
              handleSlideClick={handleSlideClick}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default Slider;
