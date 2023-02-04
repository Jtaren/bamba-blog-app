import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import Link from 'next/link'

// import {PortableText} from '@portabletext/react'
import {client} from '../../lib/client'
import Author from '../../components/_child/author'
import Format from '../../layout/format'
import { useRouter } from 'next/router'
// import Image from 'next/image'
import fetcher from '../../lib/fetcher'
import Spinner from '../../components/_child/spinner'
import Error from '../../components/_child/error'
import BlockContent from '@sanity/block-content-to-react'
import PortableText from "@sanity/block-content-to-react"
import SanityBlockContent from '@sanity/block-content-to-react'




// const router = useRouter()
// const slug  = router.query.slug || [];
const serializers = {
  types: {
    blockContent: (props) => {
      return props.children
    }
  }
}



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

// console.log("Index post,", post
// );
    
    const {
      title = 'Missing title',
      name = 'Missing name',
      authorImage,
      mainImage,
      body
    } = post

    console.log("Author data", post.author)

        // Blog Loader
    const { isLoading, isError } = fetcher('api/posts')
        
        if(isLoading) return <Spinner></Spinner>;
        if(isError) return <Error></Error>
    


    return (
      <Format>
    <section className='container mx-auto md:px-2 py-16 w-1/2'>

    <h2 className="text-3xl text-center pr-6">Author</h2>
    <div className='flex justify-center'>

      {authorImage && (
        
            <Author name={name} image={authorImage} />
      )}

    </div>
    <div className="post py-10 justify-center text-left text-[1.5rem]">

      <h1 className='font-bold text-4xl text-center pb-5'>{title}</h1>
      <div className="py-10">
       {mainImage && <img src={urlFor(mainImage).width(900).url() || "/"} loading="lazy" width={900} height={600}/>}
        </div>
        <SanityBlockContent className="justify-center"
            blocks={body}
            serializers={serializers}
            projectId="ek734hes"
            dataset="production"
            imageUrlBuilder={urlFor}
            imageOptions={{ w: 320, h: 240, fit: 'max' }} 
            
        />
        </div>

    </section>
    </Format>
  )
}

const query = `*[_type == "post" && slug.current == $slug][0]
{
  title,
  "name": author->name,
  mainImage,
  "authorImage": author->image,
  body
}`
export async function getStaticPaths() {
  const paths = await client.fetch(
    `*[_type == "post" && defined(slug.current)][].slug.current`
  )

  return {
    paths: paths.map((slug) => ({params: {slug}})),
    fallback: false,
  }
}

export async function getServerSideProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params
  const post = await client.fetch(query, { slug })
  return {
    props: {
      post
    },
    revalidate: 10,
  }
}
export default Post