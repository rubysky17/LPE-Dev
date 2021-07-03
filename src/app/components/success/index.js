import React, { useEffect } from "react";
import { db } from "app/const/firebase";

import "./styles/styles.scss";

function Success({ price, infoBill, timeStamp }) {
  useEffect(() => {
    const dataSubmit = {
      uid: timeStamp,
    };
    db.collection("timestamp")
      .add(dataSubmit)
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  }, [timeStamp]);

  return (
    <div className="wrapper-content container">
      <div className="bill">
        <div className="check-success">
          <i className="fas fa-check"></i>
        </div>
        <div className="text-center">
          <h2 className="mt-4 content-head">
            Thanh toán của bạn đã thành công
          </h2>
          <p className="mt-4 content-body text-left">*Đơn hàng {infoBill}</p>
          <p className="mt-4 content-body text-left">
            *Giá {(price / 100).toLocaleString()}đ
          </p>
          <p className="mt-4 content-body text-left">
            LPE cảm ơn bạn đã sử dụng LPE live. Chúng tôi sẽ liên lạc với bạn
            qua số điện thoại hoặc email bạn đã đăng ký với chúng tôi trong thời
            gian sớm nhất. Chúc bạn có trải nghiệm mua hàng tốt với LPE Online
            của chúng tôi.
          </p>

          <a className="btn btn-success mt-1" href="https://lpeonline.vn">
            Trở về trang chủ
          </a>
        </div>
      </div>
    </div>
  );
}

export default Success;