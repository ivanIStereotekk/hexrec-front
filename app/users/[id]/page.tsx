import { use } from "react"


async function getUsersId(id:number){
    let res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    return res.json()
}



export default function userIdPage({ params }){
    let user = use(getUsersId(params.id))
    return <p>Concrete User Data: <h2>{user.name}</h2>      <h6>{user.email} - {user.website}</h6></p>
}