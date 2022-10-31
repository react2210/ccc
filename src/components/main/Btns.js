// 바로 porps안에 setIndex속성을 구조분해할당으로 바로 받아옴
function Btns({ setIndex }) {
  return (
    <ul className="scroll_navi">
      <li className="on" onClick={() => setIndex(0)}></li>
      <li onClick={() => setIndex(1)}></li>
      <li onClick={() => setIndex(2)}></li>
      <li onClick={() => setIndex(3)}></li>
      <li onClick={() => setIndex(4)}></li>
      <li onClick={() => setIndex(5)}></li>
      <li onClick={() => setIndex(6)}></li>
    </ul>
  );
}

export default Btns;
