import { useState } from "react"

export default function Team (){

    const [count, setCount] = useState(11);

    const handleAdd = () => {
        const newCount = count + 1;
        setCount(newCount);
    }

    const handleRemove = () => {
        setCount(count - 1);
    }

    const Teamstyle = {
        border: '2px solid purple',
        borderRadius: '20px',
        margin: '15px',
        padding: '15px'
    }

    return(
        <div style={Teamstyle }>
            <h3>Team-Member : {count} </h3>
            <button onClick={handleAdd} style={{margin:'10px'}}>Add</button>
            <button onClick={handleRemove}>Remove</button>
        </div>
    )
}