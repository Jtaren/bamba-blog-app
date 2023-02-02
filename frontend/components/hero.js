import Image from "next/image"
import Link from "next/link"
import Author from "./_child/author"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import fetcher from '../lib/fetcher'
import Spinner from "./_child/spinner"
import Error from "./_child/error"


export default function hero() {

    const { data, isLoading, isError } = fetcher('api/trending')
    
    if(isLoading) return <Spinner></Spinner>;
    if(isError) return <Error></Error>

    SwiperCore.use([Autoplay])

    const bg = {
        background: "url('/images/banner.png') no-repeat",
        backgroundPosition: "right"
    }

  return (
    <section className="py-16" style={bg}>
        <div className="container mx-auto md:px-20">
            
            <Swiper
                slidesPerView={1}
                loop={true}
                autoplay= {{
                    delay: 3500
                }}
                >
                {
                    data.map((value, index) => (
                        <SwiperSlide key={index}><Slide data={value}></Slide></SwiperSlide>
                    ))
                }
            
            </Swiper>

            
        </div>
    </section>
  )
}

function Slide({ data }){

    const { id, title, category, img, published, description ,author } = data;

    return (
        <div className="grid md:grid-cols-2">
            <div className="image">
                <div href={`/posts/${id}`}><a><img src={img || "/"} width={600} height={600} alt={`${title}'s picture` } loading="lazy"/></a></div>
            </div>
            <div className="info flex justify-center flex-col">
                
                <div className="title">
                    <div href={`/posts/${id}`}><h3 className="text-3xl md:text-6xl font-bold text-gray-800 hover:text-gray-600">{title || "Unknown"}</h3></div>
                </div>
                <p className="text-gray-500 py-3">
                    {description || "description"}
                </p>
             
            </div>
        </div>
    )
}