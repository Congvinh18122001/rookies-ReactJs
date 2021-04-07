import { useRef,useState } from "react";

export function CountdownTimer() {
  const [curentTime, setCurentTime] = useState(10);
  const intervalId = useRef<number>();
  function handleStart() {
    intervalId.current = window.setInterval(() => {
        setCurentTime((pre)=>{
            if (pre<=0) {
                clearInterval(intervalId.current);
                return pre;
            }
             return pre -1;
        })
    }, 1000);
  }
  function handleReset(){
    handleStop();
    setCurentTime(
      (pre) => {
        pre =10;
        return pre;
      }
    )
  }
  function handleStop(){
    if (intervalId.current) {
      clearInterval(intervalId.current);
    }
  }
  return (
    <div>
      <h2>Count down timer</h2>
      <button onClick={handleStart}>start</button>
      <button onClick={handleStop}>stop</button> 
      <button onClick={handleReset}>Reset</button>
      <p>{curentTime}</p>
    </div>
  );
}
