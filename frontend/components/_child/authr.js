import Image from 'next/image'
import Link from 'next/link'
export default function authr() {
  return (
    <div className="author flex py-5">
        <Image src={"/images/bamba.jpg"}  alt="author" width={40} height={40}/>
        <div className="flex flex-col justify-center px-0">
          <Link href="/" className="text-md font-semibold text-gray-800 hover:text-gray-600">Bamba Global</Link>  
          <span className="text-sm text-gray-500">CEO and Founder</span>   
        </div>
    </div>
  )
}
