import React from "react";
import ComboItem from "./components/item";

function Combo({ course1, course2 }) {
  return (
    <div className="row">
      <div className="col-12 col-md-8">
        <ComboItem {...course1} level="level1" />

        <ComboItem {...course2} level="level2" />
      </div>
      <div className="col-12 col-md-4">Đây là tổng</div>
    </div>
  );
}

export default Combo;
