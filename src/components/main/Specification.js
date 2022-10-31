import React from "react";

export default function Specification() {
  return (
    <main className="myScroll">
      <div className="specification_wrap">
        <h1 className="title">Bugatti Specification</h1>

        <ul className="sublist">
          <li></li>
          <li></li>
          <li></li>
        </ul>

        <div className="car_back">
          <img
            src={process.env.PUBLIC_URL + "/img/section07/s07_car.png"}
            alt="carback"
          />
        </div>

        <ul className="iconlist">
          <li>
            <img
              src={process.env.PUBLIC_URL + "/img/section07/icon1.png"}
              alt="icon1"
            />
            <p>
              Accessible
              <br />
              charging
            </p>
          </li>
          <li>
            <img
              src={process.env.PUBLIC_URL + "/img/section07/icon2.png"}
              alt="icon2"
            />
            <p>
              Intelligent
              <br />
              drive modes
            </p>
          </li>
          <li>
            <img
              src={process.env.PUBLIC_URL + "/img/section07/icon3.png"}
              alt="icon3"
            />
            <p>
              Everyday fuel
              <br />
              efficiency
            </p>
          </li>
        </ul>
      </div>
    </main>
  );
}
