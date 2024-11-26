import { useState } from "react";

function Counter(){
    let [count,setCount] = useState(15);
    // let count = 15;
    let addCounter = ()=>{
       setCount(count+1)
    }
    let removeCounter = ()=>{
        setCount(count-1)

    }
    return(
        <>
            <h1>Count is {count}</h1>
            <button onClick={addCounter}>Add counter</button>
            <button onClick={removeCounter}>Remove counter</button>
        </>
    )
}

export default Counter;