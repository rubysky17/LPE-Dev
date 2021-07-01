import { useEffect } from "react";
import { withRouter } from "react-router-dom";

function ScrollToTop({ location }) {
  const pathName = location.pathname;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathName]);

  return null;
}

export default withRouter(ScrollToTop);
