/* 
useReducer : state가 너무 많아지거나 부모와 자식관계가 복잡한 경우 관리를 해줘 빠르게 작업할 수 있게 도와주는 Hook

dispatch가 reducer룰 호출함, reducer는 저장소를 가서 현재 state 값을 가져옴 그리고 새로운 state를 반환해줌

component -> (dispatch)-Action -> Store에서 Reducer 가져옴

dispatch({type:'값'})
dispatch({type:'값',data:'변경값'})

*/

import { useReducer } from "react";
import App from "./App";

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;

    case "DECREMENT":
      return state - 1;

    default:
      return state;
  }
}

export default function Count() {
  
 //const [상태객체,dispatch 함수] = useReducer(reducer,초기상태);
  const [number, dispatch] = useReducer(reducer, 0);

  const onPlus = () => {
    dispatch({ type: "INCREMENT" });
  };
  const onMinus = () => {
    dispatch({ type: "DECREMENT" });
  };

  return (
    <div className="App">
      <h2>{number}</h2>
      <button onClick={onPlus}> + </button>
      <button onClick={onMinus}> - </button>
    </div>
  );
}
