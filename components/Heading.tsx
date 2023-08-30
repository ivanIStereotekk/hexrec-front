
"use client"
import Link from "next/link"
import HexRecLogo from "./HexRec"


export default function HeadingComponent() {
    const curr_user = 'admin';
    return(
        <div className="flex flex-nowrap justify-start  bg-gray-950 text-base">
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

        <div className="flex bg-gray-950 text-sm w-96">
        </div> 
        <div className="flex flex-row pl-10 py-10 justify-end space-x-10">   
        <Link className="ps-96" href="/messages">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
            </svg>
            <button className="heading-link">Messages</button>
        </Link> 

        <Link href="/settings">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5" />
            </svg>
            <button className="heading-link">Settings</button>
        </Link> 

        <Link href="/me">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>

            <button className="heading-link">{curr_user}</button>
        </Link>
            
        </div> 
            
        </div>
        
    )
}


