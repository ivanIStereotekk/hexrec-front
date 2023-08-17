import { use } from "react"


async function getUsers(slug){
    let res = await fetch(`https://jsonplaceholder.typicode.com/users/${slug}`)
    return res.json()
}


export default function Page({params}){
    let users = use(getUsers(params.slug))
    console.log(params)
    return <p> Post page S L U G : {params.slug}</p>
}