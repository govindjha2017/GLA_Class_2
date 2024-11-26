import { useState } from "react";

function Counter(){
    let [count,setCount] = useState(15);
  
    // let count =15;
    let addCounter = ()=>{
        // count = count+1;
        // console.log(count);
        setCount((prevCount)=>{return prevCount+1})
        setCount((prevCount)=>{return prevCount+1})
        setCount((prevCount)=>{return prevCount+1})
        setCount((prevCount)=>{return prevCount+1})
    }
    let removeCounter = ()=>{
        setCount(count-1)
    }
    return(
       <>
         <h1 className="underline">count is {count}</h1>
         <button onClick={addCounter}>Add count</button>
         <button onClick={removeCounter}>Remove count</button>
       </>
    )
}

export default Counter;