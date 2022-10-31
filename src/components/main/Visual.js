import React, { useEffect, useRef, useState } from "react";
import Anime from "../../asset/Anime";
// 폰트어썸 불러오기
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// 폰트어썸 아이콘 불러오기
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

export default function Visual() {
  let [count1, setCount1] = useState(0);
  let [count2, setCount2] = useState(0);
  let [count3, setCount3] = useState(0);

  const title = useRef(null);
  const prev = useRef(null);
  const next = useRef(null);
  const panel = useRef(null);

  function prevFunc() {}

  function nextFunc() {}

  useEffect(() => {
    title.current.classList.add("on");

    let id = setInterval(() => {
      if (count1 <= 120) {
        setCount1(count1++);
      }
      if (count2 <= 52) {
        setCount2(count2++);
      }
      if (count3 <= 105) {
        setCount3(count3++);
      }

      // count1이 끝나면 종료
      if (count1 === 121) {
        clearInterval(id);
      }
    }, 20);
  }, []);

  return (
    <figure id="visual" className="myScroll">
      <ul className="sns_icons">
        <li>
          <FontAwesomeIcon icon={faInstagram} />
        </li>
        <li>
          <FontAwesomeIcon icon={faTwitter} />
        </li>
        <li>
          <FontAwesomeIcon icon={faYoutube} />
        </li>
      </ul>

      <div className="title" ref={title}>
        <ul>
          <li>B</li>
          <li>u</li>
          <li>g</li>
          <li>a</li>
          <li>t</li>
          <li>t</li>
          <li>i</li>
        </ul>
        <ul>
          <li>B</li>
          <li>o</li>
          <li>l</li>
          <li>i</li>
          <li>d</li>
          <li>C</li>
          <li>o</li>
          <li>n</li>
          <li>c</li>
          <li>e</li>
          <li>p</li>
          <li>t</li>
        </ul>

        <p className="text_wrap">
          France's top manufacturer of hand-operated cars, founded in 1909
        </p>

        <div className="btn">VIEW MORE</div>
      </div>

      <ul className="number_wrap">
        <li>
          <span>{count1}</span>SPH
        </li>

        <li>
          <span>{count2}</span>S
        </li>

        <li>
          <span>{count3}</span>L
        </li>
      </ul>

      <div className="btn_wrap">
        <div className="prev" ref={prev}></div>
        <div className="next" ref={next}></div>
      </div>

      <div id="slider">
        <ul className="panel">
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>

      {/* <img src={process.env.PUBLIC_URL + "/img/visual/visual_01.png"} /> */}
    </figure>
  );
}
