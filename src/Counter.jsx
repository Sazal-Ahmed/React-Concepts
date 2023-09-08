import { useState } from "react"

export default function Counter(){
    const [count, setCount] = useState(0);

    const handaleAdd = () =>{
        const newCount = count + 1;
        setCount(newCount);
    }

    const handleReduce = () =>{
        const reduceCount = count - 1;
        setCount(reduceCount);

    }

    return(
        <div className="counter">
            <h3>Counter : {count} </h3>
            <button onClick={handaleAdd} style={{margin:10}}>ADD</button>
            <button onClick={handleReduce}>Reduce</button>
        </div>

    )
}