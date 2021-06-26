import React from "react";
import { statusMessage } from "app/const/Status";

function Failed({ status }) {
  const statusMgs = statusMessage.find((code) => code.code === status);

  return (
    <div>
      <h1>Giao dịch thất bại</h1>

      <p>{statusMgs.message}</p>
    </div>
  );
}

export default Failed;
