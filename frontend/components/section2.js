import Link from 'next/link';
import Image from 'next/image';
import Authr from './_child/authr'

export default function section2() {
  return (
    <section className="container mx-auto md:px-20 py-10">
        <h1 className="font-bold text-4xl pb-5 text-center">Our Blog</h1>
        <p className="text-gray-500 text-center py-1">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam repellendus quo modi quis quaerat obcaecati qui, provident facere. Quo, reprehenderit nobis sed ab placeat quos ad expedita earum architecto atque.
       </p>

        {/* grid columms */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
            {Post()}
            {Post()}
            {Post()}
            {Post()}
            {Post()}
            {Post()}
            {Post()}
            {Post()}
            {Post()}
        </div>   
    </section>
  )
}

function Post() {
  return (
    <div className="item">
      <div className="images pt-12">
        <Link href="#">
          <Image src={"/images/bamba1.jpeg"} alt={"bamba"} width={500} height={350}/>
        </Link>
      </div>
       <div className="title">
          <Link href="#" className="text-3xl md:text-5xl font-bold text-gray-800 hover:text-gray-600">Lorem ipsum, dolor sit amet!</Link>
       </div> 
       <p className="text-gray-500 py-3">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam repellendus quo modi quis quaerat obcaecati qui, provident facere. Quo, reprehenderit nobis sed ab placeat quos ad expedita earum architecto atque.
       </p>
       <div className="info flex-col py-1">
       <div className="cat flex justify-stretch gap-7"> 
          <Link href="#" className="text-orange-500 hover:text-orange-800 pt-6">27 July 2023</Link>
          <h1 className="pt-none"><Authr></Authr></h1>
       </div>
      </div>
    </div>
  )
}
