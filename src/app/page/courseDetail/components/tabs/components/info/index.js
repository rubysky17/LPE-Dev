import React, { useEffect, useState } from "react";

import "./styles/styles.scss";

function InfoTab({ content }) {
  const [desc, setDesc] = useState(null);

  useEffect(() => {
    content && setDesc(content);
  }, [content]);

  return (
    <div className="info">
      <ul>
        {!!desc &&
          desc?.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
      </ul>
    </div>
  );
}

export default InfoTab;
