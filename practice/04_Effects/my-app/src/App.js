import { useState, useEffect } from "react";
function Hello() {

  // 1. 기본 형태
  // useEffect(()=>{
  //   console.log("created :)");
  //   // 이 리턴 화살표함수는 현재 컴포넌트가 제거되었을때 실행되는 함수입니다. 이를 클린업 함수라고도 합니다.
  //   // 이를 통해 언제 컴포넌트가 생성되었고, 언제 제거되었는지를 알 수 있게 됩니다.(이벤트리스너를 활용해 사용자의 이탈율을 분석할 수 있음)
  //   return () => console.log("destroyed :(")
  // }, [])

  // 2. 함수로 분리
  function hiFn(){
    console.log("hi :)");
    return byeFn;
  }

  function byeFn(){
    console.log("bye :(");
  }
  
  useEffect(hiFn, []);
  return <h1>hello</h1>
}
function App() {
  const [showing, setShowing] = useState(false);
  // 여기서 Hello는 onClick에 의하여 새롭게 생성되었다가 완전히 제거됩니다. 보이거나 안보이는 형식이 아닙니다.
  const onClick = () => setShowing((prev) => !prev);
  
  return (
    <div>
      {showing?<Hello />:null}
      <button onClick={onClick}>{showing?"Hide":"Show"}</button>
    </div>
  );
}
export default App;
