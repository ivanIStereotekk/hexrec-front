import Link from "next/link";
import { use } from "react";


async function getPosts(){
    let res = await fetch('https://jsonplaceholder.typicode.com/posts')
    return res.json()
}

export default function PostsPage(){
    let posts = use(getPosts());
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex"></div>
        <ul>
            {posts.map((posts:any)=>  
                    <li key={posts.id}> <Link href={`/posts/${posts.title}`}> {posts.title}</Link><br/></li>
                    )}
        </ul>
        </main>
    )
}