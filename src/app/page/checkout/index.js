import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import firebase from "firebase";

import {
  Button,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
  Checkbox,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useFormik } from "formik";

import CourseDetail from "./components/courseinfo";
import CreditCard from "./components/creditcard";
import { createOrderCourse } from "app/const/Payment";
import { courseList } from "app/const/course.js";

import "./styles/styles.scss";

const useStyles = makeStyles(() => ({
  styled: {
    width: "400px",
    display: "flex",
    backgroundColor: "#3777bc",
    padding: "10px 0",
    borderRadius: "10px",
    color: "#fff",
    "@media (max-width: 992px)": {
      width: "100%",
    },
    "&:hover": {
      backgroundColor: "#346396",
      color: "#fff",
    },
    marginTop: "20px",
  },
}));

const international = "INTERNATIONAL";
const domestic = "DOMESTIC";
const qr = "QR";

const regex = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;

// var firebaseConfig = {
//   apiKey: "AIzaSyBYGUD-zs8tEvMH_syknBxgCP8JaLsPWEc",
//   authDomain: "lpeonline.firebaseapp.com",
//   projectId: "lpeonline",
//   storageBucket: "lpeonline.appspot.com",
//   messagingSenderId: "415840596423",
//   appId: "1:415840596423:web:c3644420adf1ffe6b6a9e2"
// };

firebase.initializeApp({
  apiKey: "AIzaSyBYGUD-zs8tEvMH_syknBxgCP8JaLsPWEc",
  authDomain: "lpeonline.firebaseapp.com",
  projectId: "lpeonline",
});

var db = firebase.firestore();

function Checkout() {
  let { id, level, subId } = useParams();
  const history = useHistory();
  const classes = useStyles();
  const [secondCourse, setSecondCourse] = useState(null);
  const firstCourse = courseList[level].find((item) => item.id === +id);
  const [price, setPrice] = useState();
  const [isSubmit, setIsSubmit] = useState(false);
  const [url, setUrl] = useState();
  const [protocol, setProtocol] = useState();
  const [cardtype, setCardtype] = useState(null);
  const [infoUser, setInfoUser] = useState({});
  const [unixId, setUnixId] = useState("");
  const [checkPolicy, setCheckPolicy] = useState(false);

  useEffect(() => {
    if (level === "level2") {
      const result = courseList["level1"].find((item) => item.id === +id);
      setSecondCourse(result);
    }
  }, [level, id]);

  useEffect(() => {
    if (level === "level2" && subId) {
      const result = courseList["level1"].find((item) => item.id === +subId);
      setSecondCourse(result);
    }
  }, [subId, level, id]);

  // Checking if 1 or 2 course
  useEffect(() => {
    if (level === "level2") {
      const getPrice = () => {
        return firstCourse?.priceNew + secondCourse?.priceNew;
      };

      setPrice(getPrice);
    } else {
      setPrice(firstCourse.priceNew);
    }
  }, [level, firstCourse, secondCourse]);

  useEffect(() => {
    getIPLocal();
  }, []);

  useEffect(() => {
    generateUrl();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cardtype]);

  const disCount = () => {
    return (
      firstCourse.priceOld -
      firstCourse.priceNew +
      secondCourse.priceOld -
      secondCourse.priceNew
    );
  };

  const handleChange = (event) => {
    setCardtype(event.target.value);
  };

  const handleCheckbox = (event) => {
    setCheckPolicy(event.target.checked);
  };

  const handleGoBack = () => {
    history.goBack();
  };

  const choiceCard = () => {
    switch (cardtype) {
      case international:
        return "Thanh toán bằng thẻ Visa, Master, JCB,..";
      case domestic:
        return "Nội địa ATM Cards";
      // case qr:
      //   return "QR code";
      default:
        return "Chưa chọn";
    }
  };

  const generateUrl = () => {
    // Tạo uid (primary key) cho đơn hàng
    const uid = new Date().getTime().toString(36);
    setUnixId(uid);
    // thông tin merch
    const merchDetail = Object.assign(
      { id },
      { subId: subId ? subId : "0" },
      { price },
      { merchRef: uid },
      { typepay: cardtype },
      { level: level }
    );

    const urlData = createOrderCourse(merchDetail, protocol);

    setUrl(urlData);
  };

  const handleSubmit = async () => {
    const dataSubmit = {
      email: infoUser.email,
      phone: infoUser.phone,
      timestamp: unixId,
      name: infoUser.name,
      infobill: `${level}_${id}_${subId ? subId : "0"}`,
    };

    db.collection("users")
      .add(dataSubmit)
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
        window.open(
          url,
          "_blank" // <- This is what makes it open in a new window.
        );
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };

  const getIPLocal = async () => {
    try {
      await axios
        .get("https://api.ipify.org")
        .then((res) => setProtocol(res.data))
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  };

  const validate = (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = "*Không được để trống";
    }

    if (!values.phone) {
      errors.phone = "*Không được để trống";
    } else if (isNaN(values.phone) || !values.phone.match(regex)) {
      errors.phone = "*Số điện thoại không hợp lệ";
    }

    if (!values.email) {
      errors.email = "*Không được để trống";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "*Địa chỉ email không hợp lệ";
    }

    setIsSubmit(false);

    if (Object.keys(errors).length === 0) {
      setInfoUser({
        name: values.name,
        phone: values.phone,
        email: values.email,
      });
      setIsSubmit(true);
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
    },
    validate,
  });

  return (
    <div className="checkout">
      <div className="container">
        <div className="row checkout-head">
          <button
            className="checkout-head_button"
            type="button"
            onClick={() => {
              handleGoBack();
            }}
          >
            <i className="fal fa-chevron-left"></i>
          </button>

          <h3 className="text-center">Thanh toán</h3>

          <div></div>
        </div>

        <div className="row checkout-body">
          <div className="col-12 col-md-6 checkout-body_detail">
            <CourseDetail level={level} {...firstCourse} />

            <div className="mt-3">
              {!!secondCourse && (
                <CourseDetail level={level} {...secondCourse} />
              )}
            </div>

            <form className="wrapper-form">
              <label htmlFor="name">Tên của bạn (*)</label>

              <input
                id="name"
                name="name"
                type="text"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.name}
                placeholder="Nhập tên của bạn"
                className={
                  formik.errors.name && formik.touched.name && "input-error"
                }
                autoComplete="off"
              />
              {formik.errors.name && formik.touched.name && (
                <div className="text-danger mb-0 mt-2">
                  {formik.errors.name}
                </div>
              )}

              <label htmlFor="detail">Số điện thoại (*)</label>
              <input
                id="phone"
                name="phone"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.phone}
                placeholder="093XXXXXXX"
                className={
                  formik.errors.phone && formik.touched.phone && "input-error"
                }
                autoComplete="off"
              />

              {formik.errors.phone && formik.touched.phone && (
                <div className="text-danger mb-0 mt-2">
                  {formik.errors.phone}
                </div>
              )}

              <label htmlFor="detail">Địa chỉ Email (*)</label>
              <input
                id="email"
                name="email"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.email}
                placeholder="john.doe@gmail.com"
                className={
                  formik.errors.email && formik.touched.email && "input-error"
                }
                autoComplete="off"
              />

              {formik.errors.email && formik.touched.email && (
                <div className="text-danger mb-0 mt-2">
                  {formik.errors.email}
                </div>
              )}
            </form>

            {/* policy */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "10px",
              }}
            >
              <Checkbox
                checked={checkPolicy}
                color="primary"
                onChange={handleCheckbox}
                className="pl-0"
              />
              <p className="m-0">
                Tôi chấp nhận điều khoản và chính sách của LPE
              </p>
            </div>

            <div className="payment">
              <h4 className="checkout-body_detail-title">
                chọn phương thức thanh toán
              </h4>

              <div className="payment-item">
                <FormControl component="fieldset">
                  <RadioGroup
                    name="cardtype"
                    value={cardtype}
                    onChange={handleChange}
                  >
                    <FormControlLabel
                      value={international}
                      control={<Radio />}
                      label={<CreditCard type="visa" />}
                      labelPlacement="start"
                    />
                    <FormControlLabel
                      value={domestic}
                      control={<Radio />}
                      label={<CreditCard type="atm" />}
                      labelPlacement="start"
                    />

                    {/* <FormControlLabel
                      value={qr}
                      control={<Radio />}
                      label={<CreditCard type="qr" />}
                      labelPlacement="start"
                    /> */}
                  </RadioGroup>
                </FormControl>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 checkout-body_bill">
            <div className="bill my-3">
              <div
                className="row bill-item"
                style={{
                  border: "none",
                }}
              >
                <div className="col-6">
                  <h4 className="checkout-body_detail-title mt-0">tổng</h4>
                </div>
              </div>
              <div className="row bill-item">
                <p className="col-6">Giá gốc</p>
                <p className="col-6 text-right">
                  {!!secondCourse
                    ? (
                        firstCourse.priceOld + secondCourse.priceOld
                      ).toLocaleString()
                    : firstCourse.priceOld.toLocaleString()}
                  đ
                </p>
              </div>

              <div className="row bill-item">
                <p className="col-6">Tiết kiệm</p>
                <p className="col-6 text-right">
                  {!!secondCourse
                    ? disCount().toLocaleString()
                    : (
                        firstCourse.priceOld - firstCourse.priceNew
                      ).toLocaleString()}
                  đ
                </p>
              </div>

              <div className="row bill-item">
                <p className="col-6">Phương thức thanh toán</p>
                <p className="col-6 text-right">{choiceCard()}</p>
              </div>

              <div className="row bill-item bottom">
                <p className="col-6">Tổng giá trị</p>
                <p className="col-6 text-right">
                  {!!secondCourse
                    ? (
                        firstCourse.priceNew + secondCourse.priceNew
                      ).toLocaleString()
                    : firstCourse.priceNew.toLocaleString()}
                  đ
                </p>
              </div>
            </div>

            <Button
              variant="contained"
              className={classes.styled}
              onClick={() => {
                handleSubmit(infoUser);
              }}
              disabled={!isSubmit || !checkPolicy || !cardtype}
            >
              Tiếp tục
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
