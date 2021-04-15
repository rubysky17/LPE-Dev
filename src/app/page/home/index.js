import React, { useEffect, useState } from "react";
import { FETCH_DATA_COURSE } from "../../const/Api";
import { fetchData } from "../../ultis/configAxios/";

import "./styles/styles.scss";

function HomePage() {
  const [listMovie, setListMovie] = useState([]);

  useEffect(() => {
    fetchData(FETCH_DATA_COURSE)
      .then((res) => {
        setListMovie(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <h1>HomePage works</h1>
    </>
  );
}

export default HomePage;
