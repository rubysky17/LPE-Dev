import React from "react";

function InfoItem({ info }) {
  return (
    <div>
      <div className="introduce mb-4">
        <h1 className="introduce-title">{info.title}</h1>
      </div>

      <iframe
        width="100%"
        height="550"
        src={info.video}
        title="YouTube video player"
        frameBorder="0"
        allowFullScreen
        className="config-height"
      ></iframe>

      <div className="info">
        <ul>
          {!!info.content &&
            info.content?.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
        </ul>
      </div>
    </div>
  );
}

export default InfoItem;
