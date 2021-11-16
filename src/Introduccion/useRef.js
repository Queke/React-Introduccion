import { useRef } from "react";

const App = () => {
  const ref = useRef();
  const inputRef = useRef();
  const click = () => {
    console.log(ref.current.clientHeight);
    ref.current.innerHTML = "Chancho";
  };

  const focus = () => {
    inputRef.current.focus();
  };
  return (
    <div>
      <input ref={inputRef}></input>
      <button onClick={focus}>FOCO</button>
      <div onClick={click} ref={ref}>
        Lalito
      </div>
    </div>
  );
};
export default App;
