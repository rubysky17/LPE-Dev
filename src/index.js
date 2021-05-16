import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// edit META tag
import DocumentMeta from 'react-document-meta';
import { Provider } from "react-redux";
import store from "./core/redux/store/configStore";

import "./assets/fonts/fontawsome.min.css";
import "./assets/styles/common.scss";

import "react-multi-carousel/lib/styles.css";

const meta = {
  title: "ĐĂNG KÝ KHÓA HỌC RUN FASTER",
  description: "Nhấp vào link để đăng ký khóa học",
  meta: {
    charset: "utf-8",
    name: {
      keywords: "react,meta,document,html,tags",
    },
  },
};

ReactDOM.render(

  
  <React.StrictMode>
    <Provider store={store}>
      <DocumentMeta  {...meta}/>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
