import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import Loading from "../../components/loading";
import { Redirect } from 'react-router-dom'

import "./styles/styles.scss";

function RegisterPage() {
  const [isLoading, setIsLoading] = useState(true);
  const refForm = useRef(null)

  useEffect(() => {
    const handleLoading = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => {
      clearTimeout(handleLoading);
    };
  }, []);

  const handleForm = (data) => {
    fetch('https://app.getresponse.com/add_subscriber.html', {
      method: 'post',
      body : JSON.stringify({
        data
      }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(res => console.log(res)) // It parses the output
    .catch(function(error) {
      console.log("error---", error)
    });
  }
  

  const getDataSubmit = (e) => {
    e.preventDefault()
    const dataSubmit = [];
    
    for (let index = 0; index < refForm.current.length; index++) {
      const { name, value } = refForm.current[index];
      if (!value.length) {
        refForm.current[index].focus();
      } else {
        switch (name) {
            default:
              dataSubmit[name] = value;
            break;
        }
      }
    }

    handleForm(dataSubmit)
  }

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="bg-color"></div>
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
              // onSubmit={getDataSubmit}
              action="https://app.getresponse.com/add_subscriber.html"
              acceptCharset="utf-8"
              method="post"
              ref={refForm}
            >
              {/* Tên */}
              <div className="input-container">
                <label>Họ và tên</label>
                <input
                  type="text"
                  name="name"
                  pattern="/^[a-zA-Z!@#\$%\^\&*\)\(+=._-]{2,}$/g"
                  minLength="4"
                  required
                  placeholder="VD: Nguyễn Văn A"
                />
              </div>
              {/* Trường email (bắt buộc) */}
              <div className="input-container">
                <label>Địa chỉ Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="VD: nguyenvana@gmail.com"
                />
              </div>
              <div className="input-container">
                <label>Số điện thoại:</label>
                <input
                  name="custom_dt"
                  type="tel"
                  pattern="[0]{1}[0-9]{9}"
                  placeholder="VD: 0933333333"
                  required
                />
                <p>Nhập đủ 10 chữ số điện thoại</p>
              </div>
              <div className="input-container">
                <label>Ngày sinh</label>
                <input
                  name="custom_bod"
                  type="date"
                  placeholder="VD: 10/11/1993"
                  required
                />

                <p>Định dạng: dd/MM/YYYY</p>
              </div>
              
              <div className="input-container">
                <label>Công việc hiện tại:</label>
                <input
                  name="custom_job"
                  type="text"
                  placeholder="Nhập công việc của bạn"
                  required
                />
              </div>

              {/* Mã thông báo danh bạ */}
              {/* Nhận mã thông báo tại: https://app.getresponse.com/campaign_list.html https://app.getresponse.com/campaign_list.html */}
              <input type="hidden" name="campaign_token" defaultValue="5a3RU" />
              {/* Trang cảm ơn (tùy chọn) */}
              {/* <input
                type="hidden"
                name="thankyou_url"
                defaultValue="https://lpe.vn/thank-you"
              /> */}
              {/* Thêm người đăng ký vào chuỗi theo dõi với ngày được xác định (tùy chọn) */}
              <input type="hidden" name="start_day" defaultValue={0} />
              {/* Nút Người đăng ký */}
              <button type="submit" defaultValue="Subscribe">
                Xác nhận
              </button>
            </form>
          </div>
        </>
      )}
    </>
  );
}

export default RegisterPage;
