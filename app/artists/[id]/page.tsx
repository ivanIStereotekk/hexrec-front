import { use } from "react"


async function getUsersId(id:number){
    let res = await fetch(`http://127.0.0.1:8000/artists/${id}`)
    return res.json()
}



export default function userIdPage({ params }){
    let artist = use(getUsersId(params.id))
    return  <div className=" flex-col p-10">
        <p> Artist name :  {artist.name}</p>
        <p>Age: - {artist.age}</p>
        <p>Bio: {artist.biography}</p>
    </div>  
}