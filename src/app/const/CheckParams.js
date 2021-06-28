import jsSHA from "jssha";

// account payment
const accountPayment = {
  merchantId: "TESTONEPAY",
  accessCode: "6BEB2546",
  hashCode: "6D0870CDE5F24F34F3915FB0045120DB",
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

export const compareSecurity = (params, hashSecurity) => {
  const hashParams = createSha(params);
  console.log(hashParams);
  if (hashParams === hashSecurity) {
    return true;
  } else {
    return false;
  }
};
