import { use } from "react"
import Link from 'next/link'


async function getUsers(){
    let res = await fetch('https://jsonplaceholder.typicode.com/users')
    return res.json()
}

export default function UsersPage() {
    let users = use(getUsers())
    return(
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <h4>{process.env.USERS_PAGE_TEXT} </h4>
        <ul>
            {users.map((user:any) => (
                   <li key={user.id}> <Link href={`/users/${user.id}`}><h5>{user.name} {user.username} - {user.email} | {user.phone} </h5></Link><wbr></wbr> </li> 
                )
            )}
        </ul>
        </div>
      </main>
    )
}