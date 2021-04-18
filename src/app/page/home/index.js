import React from "react";
import "./styles/styles.scss";
import { usePageTitle } from "core/hooks/usePageTitle";

function HomePage() {
  const title = "Trang chủ";

  usePageTitle(title);

  return (
    <>
      <h1>HomePage works</h1>
    </>
  );
}

export default HomePage;
