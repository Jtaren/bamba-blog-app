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




// const router = useRouter()
// const slug  = router.query.slug || [];
const serializers = {
  types: {
    block: (props) => {
      const { style = "normal" } = props.node;

      if (/^h\d/.test(style)) {
        const level = style.replace(/[^\d]/g, "");
        return React.createElement(
          style,
          { className: `heading-${level}` },
          props.children
        );
      }

      if (style === "blockquote") {
        return <blockquote>- {props.children}</blockquote>;
      }

      // Fall back to default handling
      return BlockContent.defaultSerializers.types.block(props);
    },
    code: (props) =>
      console.log("code block", props) || (
        <pre data-language={props.node.language}>
          <code>{props.node.code}</code>
        </pre>
      )
  },
  list: (props) =>
    console.log("list", props) ||
    (props.type === "bullet" ? (
      <ul>{props.children}</ul>
    ) : (
      <ol>{props.children}</ol>
    )),
  listItem: (props) =>
    console.log("list", props) ||
    (props.type === "bullet" ? (
      <li>{props.children}</li>
    ) : (
      <li>{props.children}</li>
    )),
  marks: {
    strong: (props) =>
      console.log("strong", props) || <strong>{props.children}</strong>,
    em: (props) => console.log("em", props) || <em>{props.children}</em>,
    code: (props) => console.log("code", props) || <code>{props.children}</code>
  }
};

const MyParagraphSerializer = props => {
  const { children } = props
  return <p className="custom-paragraph">{children}</p>
}

function MyImageSerializer(props) {
  return <img src={urlFor(props.node.asset).url()} alt={props.node.alt} />
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
      author,
      mainImage,
      avatar,
      body 
    } = post

    console.log("Author data", author)

        // Blog Loader
    // const { isLoading, isError } = fetcher('api/posts')
        
    //     if(isLoading) return <Spinner></Spinner>;
    //     if(isError) return <Error></Error>
    


    return (
      <Format>
    <section className='container mx-auto md:px-2 py-16 w-1/2'>

    <div className='flex justify-center'>

      {author && (
             <div className="author flex py-5">
             <img
               src={urlFor(mainImage).width(60).url() || ""}
               loading="lazy"
               width={60}
               height={60}
               className="rounded-full"
               alt={`${name}'s picture`}
             />
             <div className="flex flex-col justify-center px-4">
               <Link href={"/"}>
                 <a className="text-md font-bold text-gray-800 hover:text-gray-600">
                   {author.username || "No Name"}
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
       {mainImage && <img src={urlFor(mainImage).width(900).url() || "/"} loading="lazy" width={900} height={600}/>}
        </div>
        <BlockContent
            blocks={body}
            
            server={client}
            serializers={{
              serializers
          }}
        />
        </div>

    </section>
    </Format>
  )
}

const query = `*[_type == "post" && slug.current == $slug][0]
`
export async function getStaticPaths() {
  const paths = await client.fetch(
    `*[_type == "post" && defined(slug.current)][].slug.current`
  )

  return {
    paths: paths.map((slug) => ({params: {slug}})),
    fallback: false,
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