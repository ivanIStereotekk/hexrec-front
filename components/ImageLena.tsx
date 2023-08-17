import Image from 'next/image'
 
export default function Lena() {
  return (
    <Image
      src="/lena_1.jpeg"
      width={200}
      height={200}
      alt="The best women in the world!"
    />
  )
}