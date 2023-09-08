import { useEffect, useState } from "react"

export default function Users(){

    const [user, setUsers] = useState([]);

    useEffect(()=>{

        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => setUsers(json))

    },[])

    return(
        <div>
            <h3>Users :{user.length} </h3>
        </div>
    )
}