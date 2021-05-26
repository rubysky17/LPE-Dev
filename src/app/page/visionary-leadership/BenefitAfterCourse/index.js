import React from "react";
import Iframe from "react-iframe";

import "./styles/styles.scss";

function BenefitAfterCourse() {
  return (
    <div className="container padding-class">
      <div className="row wrapper-video">
        <div className="col-12 col-md-6">
          <Iframe
            className="video-coach"
            url="https://www.youtube.com/embed/zjVLmHDwxgE"
            width="100%"
            height="300px"
            frameborder="0"
          />
        </div>
        
        <div className="col-12 col-md-6">
          <h2>"ĐẶC QUYỀN SAU CHƯƠNG TRÌNH"</h2>
          
          <p>
            Bạn sẽ được theo dõi hàng tuần, bởi hai chuyên gia NLP hàng đầu –
            Mr.Vas & Ms. Giang Thanh về cách thức thực hiện, áp dụng kiến thức
            thực tế, lên kế hoạch, chỉnh sửa kịp thời ngay khi xuất hiện vấn đề
            tại doanh nghiệp.
          </p>
          <p>
            Hai chuyên gia sẽ chính là hai người cố vấn để lắng nghe, chia sẻ &
            tư vấn giải quyết bất kể vấn đề bạn gặp phải là gì. Là người thấu
            hiểu nỗi lòng mà chỉ những Nhà lãnh đạo mới có.
          </p>
        </div>
      </div>
    </div>
  );
}

export default BenefitAfterCourse;
