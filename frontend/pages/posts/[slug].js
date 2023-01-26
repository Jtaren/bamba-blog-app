import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import {PortableText} from '@portabletext/react'
import {client} from '../../lib/client'
import Author from '../../components/_child/author'
import Format from '../../layout/format'
import Image from 'next/image'

function urlFor (source) {
  return imageUrlBuilder(client).image(source)
}

const ptComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null
      }
      return (
        <img
          alt={value.alt || ' '}
          loading="lazy"
          src={urlFor(value).width(320).height(240).fit('max').auto('format')}
        />
      )
    },
  },

}

const Post = ({post}) => {
  const {
    title = 'Missing title',
    name = 'Missing name',
    author,
    mainImage,
    authorImage,
    body = []
  } = post
  return (
    <Format>
    <section className='container mx-auto md:px-2 py-16 w-1/2'>

    <div className='flex justify-center'>

      {author && (
             <div className="author flex py-5">
             <image
               src={urlFor(img).width(60).url() || ""}
               width={60}
               height={60}
               className="rounded-full"
               alt={`${name}'s picture`}
             />
             <div className="flex flex-col justify-center px-4">
               <Link href={"/"}>
                 <a className="text-md font-bold text-gray-800 hover:text-gray-600">
                   {name || "No Name"}
                 </a>
               </Link>
               {/* <span className="text-sm text-gray-500">{designation || ""}</span> */}
            
             </div>
           </div>
      )}

    </div>
    <div className="post py-10">

      <h1 className='font-bold text-4xl text-center pb-5'>{title}</h1>
      <div className="py-10">
        <img src={urlFor(authorImage).width(900).url || "/"} width={900} height={600}/>
        </div>
      <PortableText
        value={body}
        components={ptComponents}
        />
        </div>

    </section>
    </Format>
  )
}

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  "name": author->name,
  "authorImage": author->image,
  body
}`
export async function getStaticPaths() {
  const paths = await client.fetch(
    groq`*[_type == "post" && defined(slug.current)][].slug.current`
  )

  return {
    paths: paths.map((slug) => ({params: {slug}})),
    fallback: true,
  }
}

export async function getStaticProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params
  const post = await client.fetch(query, { slug })
  return {
    props: {
      post
    }
  }
}
export default Post