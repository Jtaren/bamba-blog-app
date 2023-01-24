import Link from "next/link"
import Image from "next/image"
import Author from "./_child/author"
import fetcher from '../lib/fetcher'
import Spinner from "./_child/spinner"
import Error from "./_child/error"
import {urlFor} from "../lib/sanity"

export default function articles({post}) {

    const { data, isLoading, isError } = fetcher('api/posts')
    
    if(isLoading) return <Spinner></Spinner>;
    if(isError) return <Error></Error>

  return (
    <section className="container mx-auto md:px-20 py-10">
        <h1 className="font-bold text-4xl py-12 text-center">Latest Posts</h1>

        {/* grid columns */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
            {
                post.map((value, index) => (
                    <Post post={value} key={index}></Post>
                ))
            }
        </div>
    </section>
  )
}


function Post( { post } ){
    const {_id, title, _createdAt, mainImage, author, body } = post;
    return (
        <div className="item">
            <div className="images">
                <Link href={`/posts/${_id}`}><a><Image src={mainImage.url || "/"} className="rounded" width={500} height={350} /></a></Link>
            </div>
            <div className="info flex justify-center flex-col py-4">
                <div className="cat">
                    {/* <Link href={`/posts/${_id}`}><a className="text-orange-600 hover:text-orange-800">{category || "Unknown"}</a></Link> */}
                    <Link href={`/posts/${_id}`}><a className="text-gray-800 hover:text-gray-600">- {new Date(_createdAt).toDateString() || "Unknown"}</a></Link>
                </div>
                <div className="title">
                    <Link href={`/posts/${_id}`}><a className="text-xl font-bold text-gray-800 hover:text-gray-600">{title || "Title"}</a></Link>
                </div>
                <p className="text-gray-500 py-3">
                   {body.blockContent}
                </p>
                { author ? <Author {...author}></Author> : <></>}
            </div>
        </div>
    )
}