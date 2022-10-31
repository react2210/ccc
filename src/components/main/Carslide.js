import { useEffect, useRef, useState } from "react";

export default function Carslide() {
  //state
  let [Count, setCount] = useState(0);

  //ref
  const cars = useRef([]); // cars.current[0],[1],[2]
  const carNames = useRef([]);

  // console.log(carNames);

  // on class clear함수
  const clearFunc = () => {
    carNames.current.forEach((value) => {
      value.classList.remove("on");
    });
  };

  // PrevBtn
  const prevtFunc = () => {
    clearFunc();
    setCount(--Count);
    console.log(Count);
  };

  // nextBtn
  const nextFunc = () => {
    clearFunc();
    setCount(++Count);
    console.log(Count);
  };

  // slideCount
  function counter() {
    if (Count === 0) {
    } else if (Count === 1 || Count === -1) {
      carNames.current[1].classList.add("on");
    } else if (Count === 2 || Count === -2) {
      carNames.current[2].classList.add("on");
    } else if (Count === 3 || Count === -3) {
      carNames.current[0].classList.add("on");
      Count = 0;
    }
  }

  useEffect(() => {
    carNames.current[0].classList.add("on");
  }, []);

  counter();

  return (
    <section id="Carslide" className="myScroll">
      <div className="line">
        <p>
          BUGATTI <span>EXPIRENCE</span>
        </p>
      </div>

      <h1 className="title">
        <span>Bugatti</span>Best Models
      </h1>

      <h3 className="sub_title"></h3>

      <div className="slider_wrap">
        <div className="car01" ref={(elem) => (cars.current[0] = elem)}>
          <img
            src={process.env.PUBLIC_URL + "/img/section01/car03.png"}
            alt="car03"
          />
        </div>
        <div className="car02 center" ref={(elem) => (cars.current[1] = elem)}>
          <img
            src={process.env.PUBLIC_URL + "/img/section01/car01.png"}
            alt="car01"
          />
        </div>
        <div className="car03" ref={(elem) => (cars.current[2] = elem)}>
          <img
            src={process.env.PUBLIC_URL + "/img/section01/car02.png"}
            alt="car02"
          />
        </div>
      </div>

      <div className="article_wrap">
        <div
          className="prev"
          onClick={() => {
            prevtFunc();
          }}
        >
          <strong>Prev</strong>
        </div>

        <div className="title">
          <h2
            ref={(elem) => {
              carNames.current[0] = elem;
            }}
          >
            Bugatti Bolid Concpet
          </h2>
          <h2
            ref={(elem) => {
              carNames.current[1] = elem;
            }}
          >
            Bugatti Chiron Sport 300+
          </h2>
          <h2
            ref={(elem) => {
              carNames.current[2] = elem;
            }}
          >
            Bugatti Centodieci
          </h2>
        </div>

        <div
          className="next"
          onClick={() => {
            nextFunc();
          }}
        >
          <strong>Next</strong>
        </div>
      </div>

      <div className="viewbtn">VEIW MORE</div>
    </section>
  );
}
