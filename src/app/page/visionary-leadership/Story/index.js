import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import ModalVideo from "react-modal-video";
import story01 from "assets/images/story/story01.png";
import vas from "assets/images/story/vas.png";

import "./styles/styles.scss";

function Story() {
  const [onOpen, setOnOpen] = useState(false);
  const [video, setVideo] = useState("");

  return (
    <div className="bg-image">
      <div className="story container py-5">
      <div className="row content01">
        <div className="col-md-6">
          <Fade left>
            <h2>
              "Làm thế nào để đẩy doanh nghiệp phát triển tốt ở giai đoạn khủng
              hoảng?"
            </h2>
          </Fade>

          <Fade right>
            <p>
              Ở giai đoạn khủng hoảng hiện tại, bạn có thể có rất nhiều kiến
              thức chuyên môn, nhưng thứ sẽ giúp bạn vẫn phát triển tốt lại
              chính là một Tầm nhìn đủ lớn rộng & những cách thức áp dụng Tâm lý
              học vào việc kinh doanh.
            </p>
          </Fade>
        </div>

        <Fade left>
          <div className="col-md-6 wrapper-video">
            <img src={vas} className="img-fluid img-video" alt={vas} />
            <div className="box-color"></div>
            <div
              className="button-play"
              onClick={() => {
                setOnOpen(true);
                setVideo("B_61cPLb1JY");
              }}
            >
              <i className="fal fa-play"></i>
            </div>
          </div>
        </Fade>
      </div>
      <div className="row content02">
        <div className="col-md-6">
          <Fade left>
            <h2>"Chúng tôi sẽ đồng hành cùng bạn!"</h2>
          </Fade>

          <Fade left>
            <p className="mb-3">
              Chúng tôi ý thức được cặn kẽ về những biến cố đang xảy ra ngay lúc
              này & chúng tôi cũng hiểu rất rõ về căn nguyên của những vấn đề
              bạn đang gặp phải.
            </p>
            <p className="mb-3">
              Không ai có thể chắc chắn rằng mọi thứ sẽ trở lại trạng thái bình
              thường như trước. Hãy coi như đây chính là cơ hội để tái thiết lập
              lại & xây dựng mọi thứ vững mạnh hơn
            </p>
          </Fade>
        </div>

        <Fade right>
          <div className="col-md-6 ">
            <img src={story01} className="img-responsive" alt={story01} />
          </div>
        </Fade>
      </div>

      <ModalVideo
        channel="youtube"
        isOpen={onOpen}
        videoId={video}
        onClose={() => setOnOpen(false)}
      />
    </div>
    </div>
    
  );
}

export default Story;
