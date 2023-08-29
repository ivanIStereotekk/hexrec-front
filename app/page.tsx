import Image from 'next/image'

import Lena from '@/components/ImageLena'    
import Ivan from '@/components/ImageIvan'   
import roundAnimation from '@/components/indexAnimation'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">

      <iframe className='h-80 w-80' src="https://lottie.host/?file=f6a76dc5-80a7-4c0f-be9b-c53ce058559d/7o0rNUVzVW.json"></iframe>  
       
      <iframe className='h-80 w-80' src="https://lottie.host/?file=0cea07df-0c13-4d20-9eac-70544e5164e3/k4CWtaaf2f.json"></iframe>
      <iframe className='h-80 w-80' src="https://lottie.host/?file=b585d185-51bf-461f-b96c-b2c82a19f2df/wyaFplrupn.json"></iframe> 
      </div>
      <h3> H E X R E C </h3>
      <p>{process.env.INDEX_TEXT}</p>
      
      <div className='flex'>
      
        {/* <Lena/>
        <Ivan/> */}

        

      </div>

        
    </main>
  )
}
