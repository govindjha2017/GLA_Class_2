import { useState } from "react";

function Counter(){
    let [count , setCount] = useState(15)
    // let count =15

    let addCount= ()=>{
        setCount((prevCount)=>{return prevCount+1})
        setCount((prevCount)=>{return prevCount+1})
        setCount((prevCount)=>{return prevCount+1})
        setCount((prevCount)=>{return prevCount+1})
    }
    let removeCount=()=>{
        setCount(count-1);
    }
    return(
      <>
          <h1>count is {count}</h1>
          <button onClick={addCount}>add count</button>
          <button onClick={removeCount}>Remove count</button>
      </>
    )
}

export default Counter;