import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";

import { courseList } from "app/const/course.js";
import CourseDetail from "./components/courseinfo";
import CreditCard from "./components/creditcard";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

import "./styles/styles.scss";
import { createOrderCourse } from "app/const/Payment";

const useStyles = makeStyles((theme) => ({
  styled: {
    width: "400px",
    display: "flex",
    backgroundColor: "#feda6a",
    padding: "10px 0",
    borderRadius: "10px",
    "@media (max-width: 992px)": {
      width: "100%",
    },
    "&:hover": {
      backgroundColor: "#dfc987",
    },
  },
}));

const international = "INTERNATIONAL";
const domestic = "DOMESTIC";
const qr = "QR";

function Checkout() {
  const { id } = useParams();
  const history = useHistory();
  const classes = useStyles();
  const [isSubmit, setIsSubmit] = useState(false);
  const [url, setUrl] = useState();
  const [protocol, setProtocol] = useState();
  const [cardtype, setCardtype] = useState(null);
  const detailCourse = courseList.find((item) => item.id === +id);

  useEffect(() => {
    getIPLocal();
  }, []);

  useEffect(() => {
    generateUrl();

    console.log("url run", url);

    // eslint-disable-next-line react-hooks/exhaustive-deps 
  }, [isSubmit, cardtype]);

  const handleChange = (event) => {
    setCardtype(event.target.value);
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
      case qr:
        return "QR code";
      default:
        return "Chưa chọn";
    }
  };

  const generateUrl = () => {
    // Tạo uid (primary key) cho đơn hàng
    const uid = new Date().getTime().toString(36);
    // thông tin merch
    const merchDetail = Object.assign(
      detailCourse,
      { merchRef: uid },
      { typepay: cardtype }
    );

    const data = createOrderCourse(merchDetail, protocol);

    setUrl(data);
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

    if (!values.detail) {
      errors.detail = "*Không được để trống";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.detail)
    ) {
      errors.detail = "*Địa chỉ email không hợp lệ";
    }

    if (Object.keys(errors).length === 0) {
      setIsSubmit(true);
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      detail: "",
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
            <CourseDetail {...detailCourse} />

            <h4 className="checkout-body_detail-title">thông tin người dùng</h4>
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
              {formik.errors.name && formik.touched.name ? (
                <div className="text-danger mb-0 mt-2">
                  {formik.errors.name}
                </div>
              ) : null}

              <label htmlFor="detail">Địa chỉ email (*)</label>
              <input
                id="detail"
                name="detail"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.detail}
                placeholder="NguyenVanA@email.com"
                className={
                  formik.errors.detail && formik.touched.detail && "input-error"
                }
                autoComplete="off"
              />
              {formik.errors.detail && formik.touched.detail ? (
                <div className="text-danger mb-0 mt-2">
                  {formik.errors.detail}
                </div>
              ) : null}
            </form>

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

                    <FormControlLabel
                      value={qr}
                      control={<Radio />}
                      label={<CreditCard type="qr" />}
                      labelPlacement="start"
                    />
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
                  {detailCourse.priceNew.toLocaleString()} đ
                </p>
              </div>

              <div className="row bill-item">
                <p className="col-6">Giá giảm</p>
                <p className="col-6 text-right">
                  {(
                    detailCourse.priceOld - detailCourse.priceNew
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
                  {detailCourse.priceNew.toLocaleString()} đ
                </p>
              </div>
            </div>

            <Button
              variant="contained"
              className={classes.styled}
              href={url}
              disabled={!isSubmit || !cardtype}
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
