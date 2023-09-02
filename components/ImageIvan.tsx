import Image from 'next/image'
 
export default function Ivan() {
  return (
    <Image
      src="http://127.0.0.1:8000/pictures/get/1"
      width={450}
      height={300}
      alt="The best women in the world!"
    />
  )
}