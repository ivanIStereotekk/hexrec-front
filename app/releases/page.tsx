"use client"
// тут я сделал паддинг 16 / расперделил контент по justify-beetwen

//https://github.com/slash9494/react-modern-audio-player

// https://react-spectrum.adobe.com/react-spectrum/Provider.html#themes - ЭТО ПРОВАЙДЕР ! Он нужен
import AudioPlayer from 'react-modern-audio-player';
import { Suspense } from 'react';
import Lena from '@/components/ImageLena'    
import Ivan from '@/components/ImageIvan'  


const trackOne = [
    {
      name: 'Digital Maintenance',
      writer: 'Ivan Goncharov',
      img: 'image.jpeg',
      src: '/audio/Ivan Stereotekk - DigitalMaintenance.mp3',
      id: 1,
    },
  ]

function Player (){
    return (
        <AudioPlayer playList={trackOne} />
    )
}
  


export default function ReleasesPage(){

    return <>
    
    <Suspense fallback={<Loading/>}>
    
    <div className="flex justify-between space-x-10 p-16">
        <div>
            <Ivan/> 
            <h6 className="pl-5">Artist 1 </h6>
            <p>Artist Bio Here bla-bla-bla... Тут будут тексты про артистов и много букв. так много что будет очень интересно читать об артисте!</p>
            <Player/>
        </div>
        
        <div>
            <Lena/>
            <h6 className="pl-5">Artist 2</h6>
            <p>Artist Bio Here bla-bla-bla... Тут будут тексты про артистов и много букв. так много что будет очень интересно читать об артисте!</p>
            <Player/>
        </div> 

        <div>
            <Ivan/>
            <h6 className="pl-5">Artist 3 </h6>
            <p>Artist Bio Here bla-bla-bla... Тут будут тексты про артистов и много букв. так много что будет очень интересно читать об артисте!</p>
            <Player/>
        </div> 
        <div>
            <Lena/> 
            <h6 className="pl-5">Artist 4 </h6>
            <p>Artist Bio Here bla-bla-bla... Тут будут тексты про артистов и много букв. так много что будет очень интересно читать об артисте!</p>
            <Player/>
        </div>
    </div>
   
    </Suspense>
    </> 
}

function Loading() {
    return <h2>🌀 Loading...</h2>;
  }