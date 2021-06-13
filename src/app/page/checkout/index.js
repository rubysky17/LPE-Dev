import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";

import { courseList } from "app/const/course";
import CourseDetail from "./components/courseinfo";
import CreditCard from "./components/creditcard";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import {   makeStyles} from '@material-ui/core/styles';

import "./styles/styles.scss";


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
    '&:hover': {
      backgroundColor: "#dfc987"

    }
  },
}));

function Checkout() {
  const { id } = useParams();
  const [info, setInfo] = useState({
    name: "",
    info: "",
  });
  const [active, setActive] = useState(false);
  const [error, setError] = useState();
  const [cardtype, setCardtype] = React.useState("");
  const classes = useStyles();
  const handleChange = (event) => {
    setCardtype(event.target.value);
  };

  const history = useHistory();

  const handleGoBack = () => {
    history.goBack();
  };

  const choiceCard = () => {
    if (cardtype === "") {
      return "Chưa chọn";
    } else {
      return cardtype === "atm" ?
         "Thanh toán bằng thẻ Visa, Master, JCB,.." : "Nội địa ATM Cards";
    }
  };

  const detailCourse = courseList.find((item) => item.id === +id);

  return (
    <div className="checkout">
      <div className="container">
        <div className="row checkout-head">
          <button
            className="checkout-head_button"
            onClick={() => {
              handleGoBack();
            }}
          >
            <i className="fal fa-chevron-left"></i>
          </button>

          <h3 className="text-center">Thanh toán</h3>
        </div>

        <div className="row checkout-body">
          <div className="col-12 col-md-6 checkout-body_detail">
            <CourseDetail {...detailCourse} />

            <h4 className="checkout-body_detail-title">thông tin người dùng</h4>

            <form className="wrapper-form">
              <label>Tên của bạn (*)</label>
              <input
                type="text"
                name="name"
                placeholder="Nhập tên của bạn"
                className={error?.name && "input-error"}
                autocomplete="off"
              />

              {error && <p className="text-danger mb-0 mt-2">{error?.name}</p>}

              <label>Địa chỉ email / Số điện thoại (*)</label>
              <input
                type="text"
                name="info"
                placeholder="Nike@doe.com/09XXXXXXXX"
                className={error?.info && "input-error"}
                autocomplete="off"
              />

              {error && <p className="text-danger mb-0 mt-2">{error.info}</p>}
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
                      value="visa"
                      control={<Radio />}
                      label={<CreditCard type="visa" />}
                      labelPlacement="start"
                    />
                    <FormControlLabel
                      value="atm"
                      control={<Radio />}
                      label={<CreditCard type="atm" />}
                      labelPlacement="start"
                    />
                  </RadioGroup>
                </FormControl>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 checkout-body_bill">

            <div className="bill my-3">
              <div className="row bill-item" style={{
              border: "none"
            }}>
                <div className="col-6">
            <h4 className="checkout-body_detail-title mt-0" >tổng</h4>

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
            
            <Button variant="contained" className={classes.styled}>
              Tiếp tục
            </Button>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
