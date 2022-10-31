import React from "react";

function Article() {
  return (
    <main className="myScroll">
      <div className="article">
        <div className="carimg">
          <img
            src={process.env.PUBLIC_URL + "/img/section05/s05car.png"}
            alt="s05car"
          />
        </div>

        <div className="text_box">
          <h4>Hyper Sport Car</h4>
          <h1>
            Bugatti
            <br />
            <span>experience</span>
          </h1>
          <p></p>
          <div className="article_btn">VIEW MORE</div>
        </div>

        <div className="article_bg"></div>

        <div className="linetext">
          bugatti bolid concept bugatti bolid concept bugatti bolid concept
          bugatti bolid concept
        </div>
      </div>
    </main>
  );
}

export default Article;
