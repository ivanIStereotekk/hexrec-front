import Image from 'next/image'
 
export default function Ivan() {
  return (
    <Image
      src="/ivan.png"
      width={450}
      height={300}
      alt="The best women in the world!"
    />
  )
}