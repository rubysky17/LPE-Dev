import React, { useEffect, useState } from "react";
import Loading from "../../components/loading";

import "./styles/styles.scss";

function RegisterPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoading = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => {
      clearTimeout(handleLoading);
    };
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="bg-color container-fluid">
            <div className="form-container">
              <h1 className="text-center heading-form">
                Thông tin đăng ký khóa học
              </h1>
              <p className="desc-text">
                Bạn điền thông tin đăng ký khóa học Run Faster tại đây
              </p>
              <p className="desc-text">
                LPE sẽ liên hệ với bạn trong thời gian sớm nhất
              </p>

              <form
                action="https://app.getresponse.com/add_subscriber.html"
                acceptCharset="utf-8"
                method="post"
              >
                {/* Tên */}
                <div className="input-container">
                  <label>Họ và tên</label>

                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="VD: Nguyễn Văn A"
                  />
                </div>
                {/* Trường email (bắt buộc) */}
                <div className="input-container">
                  <label>Địa chỉ Email</label>

                  <input
                    type="text"
                    name="email"
                    required
                    placeholder="VD: nguyenvana@gmail.com"
                  />
                </div>
                <div className="input-container">
                  <label>Ngày sinh</label>
                  <input
                    name="custom_bod"
                    type="text"
                    placeholder="VD: 10/11/1993"
                  />

                  <p>Định dạng: dd/MM/YYYY</p>
                </div>
                <div className="input-container">
                  <label>Nguyện vọng</label>
                  <textarea
                    name="custom_desire"
                    type="text"
                    placeholder="Nhập nguyện vọng mong muốn của bạn sau khóa học"
                  />
                </div>
                <div className="input-container">
                  <label>Số điện thoại:</label>
                  <input
                    name="custom_dt"
                    type="phone"
                    placeholder="VD: 0933333333"
                  />

                  <p>Nhập đủ 10 chữ số điện thoại</p>
                </div>
                <div className="input-container">
                  <label>Công việc hiện tại:</label>
                  <input
                    name="custom_job"
                    type="text"
                    placeholder="Nhập công việc của bạn"
                  />
                </div>

                {/* Mã thông báo danh bạ */}
                {/* Nhận mã thông báo tại: https://app.getresponse.com/campaign_list.html https://app.getresponse.com/campaign_list.html */}
                <input
                  type="hidden"
                  name="campaign_token"
                  defaultValue="5a3RU"
                />
                {/* Trang cảm ơn (tùy chọn) */}
                <input
                  type="hidden"
                  name="thankyou_url"
                  defaultValue="https://lpe.vn/thank-you"
                />
                <input type="hidden" name="forward_data" value="get" />
                {/* Thêm người đăng ký vào chuỗi theo dõi với ngày được xác định (tùy chọn) */}
                <input type="hidden" name="start_day" defaultValue={0} />
                {/* Nút Người đăng ký */}
                <button type="submit" defaultValue="Subscribe">
                  Xác nhận
                </button>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default RegisterPage;
