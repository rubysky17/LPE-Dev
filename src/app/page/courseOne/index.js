import React from "react";
import { usePageTitle } from "core/hooks/usePageTitle";
import Iframe from "react-iframe";
import findPurposes from "assets/images/tim-lai-le-song-va-khat-vong-thanh-cong-po-lpe-banner.jpeg";

import "./styles/styles.scss";

function CourseOne() {
  const title = "Tìm Lại Lẽ Sống Và Khát Vọng Thành Công";
  usePageTitle(title);

  const itemChange = [
    {
      src:
        "https://lpe.vn/storage/vip-lpe/s3-vande/tim-lai-le-song-va-khat-vong-thanh-cong-po-lpe-khong-tai-gioi-787x787-102kb.png",
      text: "“Tôi không tài giỏi, tôi không thể làm điều gì lớn lao cả”",
    },
    {
      src:
        "https://lpe.vn/storage/vip-lpe/s3-vande/tim-lai-le-song-va-khat-vong-thanh-cong-po-lpe-cuoc-song-tam-toi-787x787-237kb.png",
      text: "“Cuộc đời tôi là những mảng đen mù mịt, không biết đi về đâu”",
    },
    {
      src:
        "https://lpe.vn/storage/vip-lpe/s3-vande/tim-lai-le-song-va-khat-vong-thanh-cong-po-lpe-muon-kiem-tien-787x787-399kb.png",
      text: "“Tôi muốn kiếm nhiều tiền nhưng không biết làm như thế nào”",
    },
    {
      src:
        "https://lpe.vn/storage/vip-lpe/s3-vande/tim-lai-le-song-va-khat-vong-thanh-cong-po-lpe-so-that-bai-787x787-211kb.png",
      text:
        "“Tôi sợ, sợ rủi ro, sợ thất bại nên cứ e ngại mà không dám bắt đầu”",
    },
    {
      src:
        "https://lpe.vn/storage/vip-lpe/s3-vande/tim-lai-le-song-va-khat-vong-thanh-cong-po-lpe-tri-hoan-787x787-321kb.png",
      text:
        "“Tôi luôn bị vỡ kế hoạch bởi sự trì hoãn, cứ ngồi yên chờ thời cơ”",
    },
    {
      src:
        "https://lpe.vn/storage/vip-lpe/s3-vande/tim-lai-le-song-va-khat-vong-thanh-cong-po-lpe-ko-kiem-che-787x787-254kb.png",
      text: "“Tôi không kiểm soát được mình, dễ bị cảm xúc tiêu cực chi phối”",
    },
  ];

  return (
    <>
      <div className="course-container">
        {/* background VAS and Thanh */}
        <div className="row">
          <img src={findPurposes} alt={findPurposes} className="img-fluid" />
        </div>

        {/* Video MR.vas */}
        <div className="problem-block row">
          <Iframe
            url="https://www.youtube.com/embed/op_f1QsI9Qs"
            height="315px"
            width="50%"
            className="problem-block_iframe"
            frameBorder="0"
          />
        </div>

        {/* Các vấn đề */}
        <div className="row change-block">
          <img
            src="https://lpe.vn/storage/vip-lpe/s3-vande/tim-lai-le-song-va-khat-vong-thanh-cong-po-lpe-s3-01.png"
            className="img-title col-6"
            alt="tim-lai-le-song-va-khat-vong-thanh-cong-po-lpe-s3-01.png"
          />

          <div className="row">
            {itemChange.map((item, index) => {
              return (
                <div className="col-4" key={index}>
                  <img src={item.src} alt={item.src} />
                  <p className="item-change_text">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Thay đổi tích cực */}
        <div className="row bg-gradient-1">
          <h2 className="item-change_title2">
            NHỮNG THAY ĐỔI TÍCH CỰC CỦA HỌC VIÊN QUA CHƯƠNG TRÌNH TÌM LẠI LẼ
            SỐNG VÀ KHÁT VỌNG THÀNH CÔNG
          </h2>
          <div className="row mt-5">
            <div className="col-6 text-center">
              <div className="col-10" style={{ margin: "0 auto" }}>
                <img
                  src="https://lpe.vn/storage/vip-lpe/thaydoi/tim-lai-le-song-va-khat-vong-thanh-cong-po-lpe-s4-04.png"
                  alt="tim-lai-le-song-va-khat-vong-thanh-cong-po-lpe-s4-04.png"
                  className="img-fluid"
                />
                <img
                  src="https://lpe.vn/storage/vip-lpe/thaydoi/tim-lai-le-song-va-khat-vong-thanh-cong-po-lpe-s4-05.png"
                  alt="tim-lai-le-song-va-khat-vong-thanh-cong-po-lpe-s4-05.png"
                  className="img-fluid"
                />
                <img
                  src="https://lpe.vn/storage/vip-lpe/thaydoi/tim-lai-le-song-va-khat-vong-thanh-cong-po-lpe-s4-06.png"
                  alt="tim-lai-le-song-va-khat-vong-thanh-cong-po-lpe-s4-06.png"
                  className="img-fluid"
                />
                <img
                  src="https://lpe.vn/storage/vip-lpe/thaydoi/tim-lai-le-song-va-khat-vong-thanh-cong-po-lpe-s4-07.png"
                  alt="tim-lai-le-song-va-khat-vong-thanh-cong-po-lpe-s4-07.png"
                  className="img-fluid"
                />
                <img
                  src="https://lpe.vn/storage/vip-lpe/thaydoi/tim-lai-le-song-va-khat-vong-thanh-cong-po-lpe-s4-08.png"
                  alt="tim-lai-le-song-va-khat-vong-thanh-cong-po-lpe-s4-08.png"
                  className="img-fluid"
                />
                <img
                  src="https://lpe.vn/storage/vip-lpe/thaydoi/tim-lai-le-song-va-khat-vong-thanh-cong-po-lpe-s4-09.png"
                  alt="tim-lai-le-song-va-khat-vong-thanh-cong-po-lpe-s4-08.png"
                  className="img-fluid"
                />
              </div>
            </div>

            <div className="col-6">
              <div className="col-12" style={{ height: "90%" }}>
                <Iframe
                  url="https://www.youtube.com/embed/Mk6O59KH7TU"
                  height="100%"
                  width="100%"
                  className="problem-block_iframe"
                  frameBorder="0"
                  style={{ "padding-right": "15px" }}
                />
              </div>
            </div>
          </div>

          <div style={{ "text-align": "center", "margin-top": "20px" }}>
            <img
              src="https://lpe.vn/storage/vip-lpe/thaydoi/tim-lai-le-song-va-khat-vong-thanh-cong-po-lpe-s4-10.png"
              alt="tim-lai-le-song-va-khat-vong-thanh-cong-po-lpe-s4-10.png"
              className="col-10"
            />
          </div>
        </div>

        {/* Người đồng hành */}
        <div className="row bg-gradient-2">
          <h2 className="item-change_title2">
            NGƯỜI ĐỒNG HÀNH GIÚP BẠN TÌM LẠI LẼ SỐNG VÀ KHÁT VỌNG THÀNH CÔNG
          </h2>

          <div className="row">
            <div className="col-6">
              <img
                src="https://lpe.vn/storage/vip-lpe/vas-582x500.png"
                alt="vas-582x500.png"
              />
            </div>
            <div className="col-6" style={{ color: "#fff" }}>
              <div className="col-12">
                <p style={{ "text-align": "center", "font-size": "27px" }}>
                  Vasanth Gopalan
                </p>
                <p style={{ "text-align": "center" }}>
                  Creator + Founder of LPE & Life Uni
                </p>
                <p>
                  Chairman của Leading Performance Group tại Singapore,
                  Malaysia, Vietnam, Thailand, Mandiver, Srilanka
                </p>
                <p>
                  30 năm kinh nghiệm đào tạo khi phục vụ cho Lực lượng vũ trang
                  Singapore ở vai trò Sĩ Quan Tham Mưu
                </p>
                <p>
                  18 năm là Master Trainer, huấn luyện NLP và các ngành Khoa học
                  Tâm trí tại nhiều quốc gia trên thế giới với các chứng nhận uy
                  tín từ Mỹ, Châu Âu
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-6" style={{ color: "#fff" }}>
              <div className="col-12">
                <p style={{ "text-align": "center", "font-size": "27px" }}>
                  Mrs. La Hạ Giang Thanh
                </p>
                <div style={{ "text-align": "center" }}>
                  <p>Managing Director</p>
                  <p>NLP Master Trainer</p>
                  <p>Advanced Generative Trance Coach</p>
                  <p>Time Line Therapist</p>
                  <p>Hypnotherapist</p>
                </div>
                <p>
                  Người tiên phong trong việc tạo nền tảng ngôn ngữ, thuật ngữ
                  cho ngành NLP bằng tiếng Việt.
                </p>
                <p>
                  Nhà Tư Vấn Trị Liệu đã chữa lành và chuyển hoá thành công hàng
                  trăm khách hàng đủ mọi lứa tuổi và ngành nghề.
                </p>
                <p>
                  Giám đốc Điều hành 9x trẻ tuổi và tài năng, dẫn dắt đội ngũ
                  nhân viên trở thành con người tuyệt vời nhất của chính họ và
                  từng bước khẳng định vị thế của ngành khoa học tư duy NLP tại
                  Việt Nam.
                </p>
              </div>
            </div>
            <div className="col-6" style={{ "text-align": "center" }}>
              <img
                src="https://lpe.vn/storage/vip-lpe/la-ha-giang-thanh.png"
                alt="la-ha-giang-thanh.png"
              />
            </div>
          </div>
        </div>

        {/* Quyền lợi */}
        <div className="row benefits-block">
          <img
            src="https://lpe.vn/storage/vip-lpe/quyenloi/tim-lai-le-song-va-khat-vong-thanh-cong-po-lpe-s7-02.png"
            alt="tim-lai-le-song-va-khat-vong-thanh-cong-po-lpe-s7-02.png"
            style={{
              margin: "0 auto",
              marginTop: "50px",
            }}
            className="img-fluid"
          />

          <div
            className="row"
            style={{
              margin: "0 auto",
              width: "80%",
            }}
          >
            <div className="col-4">
              <img
                src="https://lpe.vn/storage/vip-lpe/quyenloi/tim-lai-le-song-va-khat-vong-thanh-cong-po-lpe-quyen-loi-01.jpg"
                alt="tim-lai-le-song-va-khat-vong-thanh-cong-po-lpe-quyen-loi-01.jpg"
                className="img-fluid"
              />

              <a
                href="https://lpe.vn/register.php?type=vip&utm_source=&utm_medium=&utm_campaign=&utm_term=&utm_content="
                id="vip"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://lpe.vn/storage/vip-lpe/vip.gif"
                  alt="vip.gif"
                  className="img-fluid my-3"
                />
              </a>
            </div>
            <div className="col-4">
              <img
                src="https://lpe.vn/storage/vip-lpe/quyenloi/tim-lai-le-song-va-khat-vong-thanh-cong-po-lpe-quyen-loi-02.jpg"
                alt="tim-lai-le-song-va-khat-vong-thanh-cong-po-lpe-quyen-loi-02.jpg"
                className="img-fluid"
              />

              <a
                href="https://lpe.vn/register.php?type=vip&utm_source=&utm_medium=&utm_campaign=&utm_term=&utm_content="
                id="vip"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://lpe.vn/storage/vip-lpe/premium.gif"
                  alt="vip.gif"
                  className="img-fluid my-3"
                />
              </a>
            </div>
            <div className="col-4">
              <img
                src="https://lpe.vn/storage/vip-lpe/quyenloi/tim-lai-le-song-va-khat-vong-thanh-cong-po-lpe-quyen-loi-03.jpg"
                alt="tim-lai-le-song-va-khat-vong-thanh-cong-po-lpe-quyen-loi-03.jpg"
                className="img-fluid"
              />

              <a
                href="register.php?type=vip&utm_source=&utm_medium=&utm_campaign=&utm_term=&utm_content="
                id="vip"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://lpe.vn/storage/vip-lpe/general.gif"
                  alt="vip.gif"
                  className="img-fluid my-3"
                />
              </a>
            </div>
          </div>
        </div>

        {/* khu vực ghế ngồi */}
        <div className="row areaMap-block">
          <div className="col-6 bg-white" style={{ margin: "0 auto" }}>
            <img
              src="https://lpe.vn/storage/vip-lpe/tim-lai-le-song-va-khat-vong-thanh-cong-po-lpe-uu-dai-pp-ve-pre.png"
              alt="tim-lai-le-song-va-khat-vong-thanh-cong-po-lpe-uu-dai-pp-ve-pre.png"
              className="img-fluid"
            />
            <img
              src="https://lpe.vn/storage/vip-lpe/tim-lai-le-song-va-khat-vong-thanh-cong-po-lpe-uu-dai-pp-ve-vip.jpg"
              alt="tim-lai-le-song-va-khat-vong-thanh-cong-po-lpe-uu-dai-pp-ve-vip.jpg"
              className="img-fluid"
            />
          </div>
        </div>

        {/* sơ đồ ghế ngồi */}
        <div className="row seatMap-block">
          <div className="col-6" style={{ margin: "0 auto" }}>
            <img
              src="https://lpe.vn/storage/vip-lpe/sodochongoi/tim-lai-le-song-va-khat-vong-thanh-cong-po-lpe-s8-08.png"
              alt="tim-lai-le-song-va-khat-vong-thanh-cong-po-lpe-s8-08.png"
              className="img-fluid"
            />
            <img
              src="https://lpe.vn/storage/vip-lpe/sodochongoi/tim-lai-le-song-va-khat-vong-thanh-cong-po-lpe-map.jpg"
              alt="tim-lai-le-song-va-khat-vong-thanh-cong-po-lpe-map.jpg"
              className="img-fluid"
            />
          </div>
        </div>

        {/* ưu đãi học viên */}
        <div className="row endow-block">
          <div className="col-7 row" style={{ margin: "0 auto" }}>
            <img
              src="https://lpe.vn/storage/vip-lpe/uudaipremium/tim-lai-le-song-va-khat-vong-thanh-cong-po-lpe-s8-01.png"
              alt="tim-lai-le-song-va-khat-vong-thanh-cong-po-lpe-s8-01.png"
              className="img-fluid"
            />

            <div className="col-6">
              <img
                src="https://lpe.vn/storage/vip-lpe/uudaipremium/tim-lai-le-song-va-khat-vong-thanh-cong-po-lpe-s8-03.png"
                alt="tim-lai-le-song-va-khat-vong-thanh-cong-po-lpe-s8-03.png"
                className="img-fluid"
              />
              <h2 style={{ color: "#fff", textAlign: "center" }}>
                Bình nước LifeUni
              </h2>
            </div>

            <div className="col-6">
              <img
                src="https://lpe.vn/storage/vip-lpe/uudaipremium/tim-lai-le-song-va-khat-vong-thanh-cong-po-lpe-s8-04.png"
                alt="tim-lai-le-song-va-khat-vong-thanh-cong-po-lpe-s8-04.png"
                className="img-fluid"
              />
              <h2 style={{ color: "#fff", textAlign: "center" }}>
                Tài liệu học tập
              </h2>
            </div>

            <div className="col-6">
              <img
                src="https://lpe.vn/storage/vip-lpe/uudaivip/tim-lai-le-song-va-khat-vong-thanh-cong-po-lpe-s8-09.png"
                alt="tim-lai-le-song-va-khat-vong-thanh-cong-po-lpe-s8-09.png"
                className="img-fluid"
              />
              <h2 style={{ color: "#fff", textAlign: "center" }}>Áo LifeUni</h2>
            </div>

            <div className="col-6">
              <img
                src="https://lpe.vn/storage/vip-lpe/uudaivip/tim-lai-le-song-va-khat-vong-thanh-cong-po-lpe-s8-10.png"
                alt="tim-lai-le-song-va-khat-vong-thanh-cong-po-lpe-s8-10.png"
                className="img-fluid"
              />
              <h2 style={{ color: "#fff", textAlign: "center" }}>
                2 Xuất Teabreak mỗi ngày
              </h2>
            </div>
          </div>

          <div style={{ textAlign: "center", margin: "0 auto" }}>
            <div
              className="col-6"
              style={{
                textAlign: "center",
                margin: "0 auto",
                marginTop: "50px",
                marginBottom: "50px",
              }}
            >
              <img
                src="https://lpe.vn/storage/vip-lpe/dang-ky.gif"
                alt="https://lpe.vn/storage/vip-lpe/dang-ky.gif"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CourseOne;
