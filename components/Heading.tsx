
"use client"
import Link from "next/link"
import HexRecLogo from "./HexRec"


export default function HeadingComponent() {
    return(
        <div className="flex justify-start  bg-gray-950 text-base">
        <header className="p-10 w-full  max-w-5xl items-center justify-between font-mono text-md lg:flex">
        <Link href="/"> <HexRecLogo/> </Link>
            <nav className=" space-x-10">
            <Link href="/releases"><button className="heading-link">Releases</button></Link>   
            <Link href="/artists"><button className="heading-link ">Artists</button></Link>            
            <Link href="/posts"><button className="heading-link">News</button></Link>
            <Link href="/create"><button className="heading-link">Contacts</button></Link>  
            <Link href="/btn5"><button className="heading-link">Shares</button></Link>            
            <Link  href="/contribute"><button className="heading-link">Contribute</button></Link>
            </nav>
            
        </header>
        
        
        
       
        
        </div>
        
    )
}


