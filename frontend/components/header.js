import { ImFacebook, ImTwitter, ImYoutube } from "react-icons/im";
import Link from 'next/link'
// import React, {useState} from "react"

export default function header({posts}) {

    
    // const [searchTerm, setSearchTerm] = useState('');
    // const [filteredData, setFilteredData] = useState(posts);
  
    // const handleSearch = event => {
    //   setSearchTerm(event.target.value);
    //   setFilteredData(
    //     posts.filter(blog =>
    //       blog.title.toLowerCase().includes(searchTerm.toLowerCase())
    //       )
    //       );
    //     };
   

  return (
    <header className="bg-gray-50">
        <div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3">
            <div className="md:flex-none w-96 order-2 sm:order-1 flex justify-center py-4 sm:py-0">
                <input type="text" className="input-text"  placeholder="Search..."  />
            </div>
            <div className="shrink w-80 sm:order-2">
                <Link href={"/"}>
                    <a className="font-bold uppercase text-[#fb1c48] text-3xl">Bamba Blog</a>
                </Link>
            </div>
            <div className="w-96 order-3 flex justify-center">
                <div className="flex gap-6">
                    <Link href={"/"}><a><ImFacebook color="#802ccc" /></a></Link>
                    <Link href={"/"}><a><ImTwitter color="#802ccc" /></a></Link>                    
                    <Link href={"/"}><a><ImYoutube color="#802ccc" /></a></Link>
                </div>
            </div>
        </div>
    </header>
  )
}
