import Image from 'next/image'

import Lena from '@/components/ImageLena'    
import Ivan from '@/components/ImageIvan'   


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
      <h4>{process.env.SITE_NAME}</h4>      
      </div>
      <h2>Name Of Article </h2>
      <div className='flex'>
        <Lena/>
        <Ivan/>



      </div>
    
        <p>
          Here would be a great article about the love to the music )
        </p>
        
    </main>
  )
}
