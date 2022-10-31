function Slide() {
  return (
    <main id="slide" className="myScroll">
      <div className="inner">
        <h1 className="title">
          Bugatti <span>Quality</span>
        </h1>

        <div className="slide_wrap">
          <div className="left">
            <div className="pic1">
              <img
                src={process.env.PUBLIC_URL + "/img/section03/s03left_1.png"}
                alt=""
              />
            </div>
          </div>
          <div className="right">
            <div className="pic1">
              <img
                src={process.env.PUBLIC_URL + "/img/section03/s03right_1.png"}
                alt=""
              />
            </div>
          </div>
          <div className="center"></div>

          <div className="btn_wrap">
            <div className="prev">PREV</div>
            <div className="next">NEXT</div>
          </div>
        </div>
      </div>
    </main>
  );
}
export default Slide;
