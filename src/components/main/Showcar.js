import React from "react";

export default function Showcar() {
  return (
    <main id="car_container" className="myScroll">
      <div className="car_wrap">
        <div className="car_body">
          <img
            src={process.env.PUBLIC_URL + "/img/section06/s06body.png"}
            alt=""
          />
        </div>
        <div className="left_tire">
          <img
            src={process.env.PUBLIC_URL + "/img/section06/s06left.png"}
            alt="left_tire"
          />
        </div>
        <div className="right_tire">
          <img
            src={process.env.PUBLIC_URL + "/img/section06/s06right.png"}
            alt="right_tire"
          />
        </div>
      </div>
    </main>
  );
}
