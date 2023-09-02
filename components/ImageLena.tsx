import Image from 'next/image'
 
export default function Lena() {
  return (
    <Image
      src="http://127.0.0.1:8000/pictures/get/2"
      width={200}
      height={200}
      alt="The best women in the world!"
    />
  )
}