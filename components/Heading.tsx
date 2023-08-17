
"use client"
import Link from "next/link"
import HexRecLogo from "./HexRec"


export default function HeadingComponent() {
    return(
        <div className="flex justify-start text-base">
        <header className="p-10 w-full  max-w-5xl items-center justify-between font-mono text-md lg:flex">
        <Link href="/"> <HexRecLogo/> </Link>
            <nav className=" space-x-10">
            <Link href="/releases"><button className="dark:hover:bg-black motion-safe:hover:-translate-x-0.5 motion-safe:transition">Releases</button></Link>   
            <Link href="/users"><button className="dark:hover:bg-black motion-safe:hover:-translate-x-0.5 motion-safe:transition">Artists</button></Link>            
            <Link href="/posts"><button className="dark:hover:bg-black motion-safe:hover:-translate-x-0.5 motion-safe:transition">News</button></Link>
            <Link href="/create"><button className="dark:hover:bg-black motion-safe:hover:-translate-x-0.5 motion-safe:transition">Contact Page</button></Link>  
            <Link href="/btn5"><button className="dark:hover:bg-black motion-safe:hover:-translate-x-0.5 motion-safe:transition">Shares</button></Link>            
            <Link  href="/contribute"><button className="dark:hover:bg-black motion-safe:hover:-translate-x-0.5 motion-safe:transition">Contribute</button></Link>

            </nav>
            
        </header>
       
        
        </div>
        
    )
}


