import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  //   function lowerCount() {
  //     return setCount(count - 1);
  //   }

  return (
    <>
      <h1 style={{ color: "white" }}>Counter Value - {count} </h1>
      <button
        onClick={function () {
          return setCount(0);
        }}
      >
        Reset Counter
      </button>

      <button onClick={() => (count >= 10 ? "" : setCount(count + 1))}>
        Increase Counter
      </button>

      <button
        onClick={() => {
          return setCount(count - 1);
        }}
      >
        Decrease Counter
      </button>

      {/* <button onClick={lowerCount}>Decrease Counter</button> */}
    </>
  );
};

export default Counter;
