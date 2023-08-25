import { use } from "react"
import Link from 'next/link'


async function getUsers(){
    let res = await fetch('http://127.0.0.1:8000/artists_all',{ cache: 'no-store' })
    return res.json()
}

export default function UsersPage() {
    let users = use(getUsers())
    console.log(users)
    return(
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <h4>{process.env.USERS_PAGE_TEXT} </h4>
        <ul>
            {users.map((user:any) => (
                   <li key={user.id}> <Link href={`/artists/${user.id}`}><h5>{user.name}  - {user.email} | {user.age} - {user.biography.substring(0,30)+"..."}</h5></Link><wbr></wbr> </li> 
                )
            )}
        </ul>
        </div>
      </main>
    )
}