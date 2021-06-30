import jsSHA from "jssha";

// const for bill to pay course
const COMMAND = "pay";
const CURRENCY = "VND";
const LOCALE = "vn";
const RETURNURL = "https://lpe.vn/status/";
const VERSION = 2;

// domain of onepay
const urlPayment = "https://onepay.vn/paygate/vpcpay.op?";

// account payment
const accountPayment = {
  merchantId: "LPETEAM",
  accessCode: "0E5EBDCA",
  hashCode: "1A61B629F718BCFF4C4D9C21506E6DE6",
};

export const objectToQuery = (object) => {
  const queryString = Object.keys(object)
    .map((key) => `${key}=${object[key]}`)
    .join("&");

  const shaResult = createSha(queryString);

  const url = urlPayment + `${queryString}&vpc_SecureHash=${shaResult}`;

  return url;
};

const createSha = (query) => {
  let result = "";
  // Create object SHA-256 type TEXT
  const sha256 = new jsSHA("SHA-256", "TEXT");
  // import hashCode type HEX
  sha256.setHMACKey(accountPayment.hashCode, "HEX");
  sha256.update(query);

  result = sha256.getHMAC("HEX");
  return result.toUpperCase();
};

export const createOrderCourse = (detail, customIP) => {
  const params = {
    vpc_AccessCode: accountPayment.accessCode,
    vpc_Amount: detail.price * 100,
    vpc_CardList: detail.typepay,
    vpc_Command: COMMAND,
    vpc_Currency: CURRENCY,
    vpc_Locale: LOCALE,
    vpc_MerchTxnRef: detail.merchRef,
    vpc_Merchant: accountPayment.merchantId,
    vpc_OrderInfo: `${detail.level}_${detail.id}_${detail.subId}`,
    vpc_ReturnURL: RETURNURL,
    vpc_TicketNo: customIP,
    vpc_Version: VERSION,
  };

  return objectToQuery(params);
};
