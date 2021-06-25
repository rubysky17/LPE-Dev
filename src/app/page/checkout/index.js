import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";

import {
  Button,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import CourseDetail from "./components/courseinfo";
import CreditCard from "./components/creditcard";
import { createOrderCourse } from "app/const/Payment";
import { courseList } from "app/const/course.js";

import "./styles/styles.scss";

const useStyles = makeStyles(() => ({
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
    marginTop: "20px",
  },
}));

const international = "INTERNATIONAL";
const domestic = "DOMESTIC";
const qr = "QR";

function Checkout() {
  let { id, level } = useParams();
  const history = useHistory();
  const classes = useStyles();
  const [secondCourse, setSecondCourse] = useState(null);
  const firstCourse = courseList[level].find((item) => item.id === +id);
  const [price, setPrice] = useState();

  const [isSubmit, setIsSubmit] = useState(false);
  const [url, setUrl] = useState();
  const [protocol, setProtocol] = useState();
  const [cardtype, setCardtype] = useState(null);

  useEffect(() => {
    if (level === "level2") {
      const result = courseList["level1"].find((item) => item.id === +id);
      setSecondCourse(result);
    }
  }, [level, id]);

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
  }, [isSubmit, cardtype]);

  const disCount = (newPrice, oldPrice) => {
    return oldPrice - newPrice;
  };

  const handleChange = (event) => {
    setCardtype(event.target.value);
    setIsSubmit(true);
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
      { id },
      { price },
      { merchRef: uid },
      { typepay: cardtype },
      { level: level }
    );

    const urlData = createOrderCourse(merchDetail, protocol);

    setUrl(urlData);
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
              {secondCourse && <CourseDetail level={level} {...secondCourse} />}
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
                  {secondCourse
                    ? (
                        firstCourse.priceNew + secondCourse.priceNew
                      ).toLocaleString()
                    : firstCourse.priceNew.toLocaleString()}
                  đ
                </p>
              </div>

              <div className="row bill-item">
                <p className="col-6">Giá giảm</p>
                <p className="col-6 text-right">
                  {secondCourse
                    ? disCount(
                        firstCourse.priceNew + secondCourse.priceNew,
                        firstCourse.priceOld + secondCourse.priceOld
                      ).toLocaleString()
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
                  {secondCourse
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
