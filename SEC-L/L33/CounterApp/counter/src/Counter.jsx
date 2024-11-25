import { useState } from "react";

function Counter(){
    let [count , setCount] = useState(15);
    
    // let count =15;
    let addCounter = ()=>{
        setCount((prevCount)=>{return prevCount+1})
        setCount((prevCount)=>{return prevCount+1})
        setCount((prevCount)=>{return prevCount+1})
        setCount((prevCount)=>{return prevCount+1})
    }
    let removeCounter = ()=>{
        setCount(count-1);
    }
    return (
        <>
            <h1>counter is {count}</h1>
            <button onClick={addCounter}>add counter</button>
            <button onClick={removeCounter}>remove counter</button>
        </>
    )
}

export default Counter;