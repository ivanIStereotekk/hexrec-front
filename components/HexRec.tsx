import Image from 'next/image'
import Anime,{anime} from "react-anime";


export default function HexRecLogo() {
  return (
    <div className='flex justify-start space-x-1'>
    <Anime easing="easeOutCubic"
         duration={3000}
         direction="reverse"
         delay={1000}
         translateX='2rem'
         scale={0.1}>
        <img className="transform hover:rotate-180 transition duration-500" src="hexrec_logo.svg" width={50} height={50} />
    </Anime>
    <h6 className=" pt-3">H E X R E C</h6>
    </div>
  )
}