import React from "react";
import axios from "axios";

function RegisterPage() {
  const handleSubmit = () => {
    axios
      .post("https://app.getresponse.com/add_subscriber.html", {
        name: "test123",
        email: "abcnshan@gmai.com",
        custom_bod: "10/10/2000",
        custom_desire: "abc",
        custom_dt: "0582514125",
        custom_job: "asdaw",
        campaign_token: "5a3RU",
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div>
      <form
        action="https://app.getresponse.com/add_subscriber.html"
        acceptCharset="utf-8"
        method="post"
      >
        {/* Tên */}
        name: <input type="text" name="name" required />
        <br />
        {/* Trường email (bắt buộc) */}
        email: <input type="text" name="email" required />
        <br />
        Ngày sinh: <input name="custom_bod" type="text" />
        <br />
        desire: <input name="custom_desire" type="text" />
        <br />
        dt: <input name="custom_dt" type="text" />
        <br />
        job: <input name="custom_job" type="text" />
        <br />
        {/* Mã thông báo danh bạ */}
        {/* Nhận mã thông báo tại: https://app.getresponse.com/campaign_list.html https://app.getresponse.com/campaign_list.html */}
        <input type="hidden" name="campaign_token" defaultValue="5a3RU" />
        {/* Trang cảm ơn (tùy chọn) */}
        <input
          type="hidden"
          name="thankyou_url"
          defaultValue="https://lpe.vn/register-thank-you.php"
        />
        <input type="hidden" name="forward_data" value="get" />
        {/* Thêm người đăng ký vào chuỗi theo dõi với ngày được xác định (tùy chọn) */}
        <input type="hidden" name="start_day" defaultValue={0} />
        {/* Nút Người đăng ký */}
        <button type="submit" defaultValue="Subscribe">
          Xác nhận
        </button>
      </form>
      ;
    </div>
  );
}

export default RegisterPage;
