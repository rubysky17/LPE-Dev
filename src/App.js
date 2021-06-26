import Failed from "app/components/failed";
import Success from "app/components/success";
import Wrongpath from "app/components/wrongpath";

function App() {
  const url_string = window.location.href;
  const url = new URL(url_string);

  const status = url.searchParams.get("vpc_TxnResponseCode");
  const price = url.searchParams.get("vpc_Amount");
  const infoBill = url.searchParams.get("vpc_OrderInfo");

  const renderComponent = () => {
    return status === "0" ? (
      <Success price={price} infoBill={infoBill} />
    ) : (
      <Failed status={status} />
    );
  };
  return <>{!!status ? renderComponent() : <Wrongpath />}</>;
}

export default App;
