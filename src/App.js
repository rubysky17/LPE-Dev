import { useEffect, useState } from "react";
import Failed from "app/components/failed";
import Success from "app/components/success";
import Wrongpath from "app/components/wrongpath";
import { compareSecurity } from "app/const/CheckParams";

function App() {
  const [params, setParams] = useState("");
  const url_string = window.location.href;
  const url = new URL(url_string);

  const status = url.searchParams.get("vpc_TxnResponseCode");
  const price = url.searchParams.get("vpc_Amount");
  const infoBill = url.searchParams.get("vpc_OrderInfo");
  const hashSecurity = url.searchParams.get("vpc_SecureHash");

  useEffect(() => {
    if (status) {
      const url_params = url_string?.split("?")[1];
      const removeSecureHash = url_params?.split("&vpc_SecureHash")[0];
      setParams(removeSecureHash);
    }
  }, [status, url_string]);

  const renderComponent = () => {
    if (params === "") {
      return <h1>Sai đường dẫn</h1>;
    }

    if (compareSecurity(params, hashSecurity)) {
      return status === "0" ? (
        <Success price={price} infoBill={infoBill} />
      ) : (
        <Failed status={status} />
      );
    } else {
      return <Wrongpath />;
    }
  };

  return <>{renderComponent()}</>;
}

export default App;
