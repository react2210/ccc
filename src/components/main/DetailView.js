import React from "react";

function DetailView() {
  return (
    <main className="myScroll">
      <h1 className="view_title">
        Bugatti <span> Detail View </span>
      </h1>
      <ul className="sub_menu_wrap">
        <li>Centiago</li>
        <li>Bolid Concpet</li>
        <li>Chiron Sropt 300+</li>
      </ul>

      <div className="detail_view">
        <div className="left">
          <div className="pic1">
            <img
              src={process.env.PUBLIC_URL + "/img/section04/left.png"}
              alt=""
            />
          </div>
          <div className="pic2">
            <img
              src={process.env.PUBLIC_URL + "/img/section04/left2.png"}
              alt=""
            />
          </div>
        </div>

        <div className="center">
          <img
            src={process.env.PUBLIC_URL + "/img/section04/center.png"}
            alt=""
          />
        </div>

        <div className="right">
          <img
            src={process.env.PUBLIC_URL + "/img/section04/right.png"}
            alt=""
          />
        </div>
      </div>
    </main>
  );
}

export default DetailView;
