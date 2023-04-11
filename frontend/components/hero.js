import Image from "next/image";
import Link from "next/link";
import Author from "./_child/author";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import fetcher from "../lib/fetcher";
import Spinner from "./_child/spinner";
import Error from "./_child/error";

import hero1 from "../public/images/hero1.jpeg"
import hero2 from "../public/images/hero2.jpeg"

export default function hero() {
  const { data, isLoading, isError } = fetcher("api/trending");

  if (isLoading) return <Spinner></Spinner>;
  if (isError) return <Error></Error>;

  // SwiperCore.use([Autoplay])

  // const bg = {
  //     background: "url('/images/banner.png') no-repeat",
  //     backgroundPosition: "right"
  // }

  return (
    <section className="py-16">
      <div className="container mx-auto md:px-0 ">
        <div className="flex flex-wrap content-center items-center relative">

        <div className="lg:w-7/12 w-full md:w-6/12 flex items-center">
          <h1 className="mx-auto text-left text-[1.8rem] lg:text-[2.6rem] tracking-[0.17rem] leading-[1.96rem] lg:leading-[3rem] font-[600] text-">
            Hello! Welcome to <br /> Bamba Blog Post. <br /> See our{" "}
            <span
              className="text-[#8D75FD]
]"
            >
              stories
            </span>
            ,
            <br />{" "}
            <span
              className="text-[#8D75FD]
]"
            >posts</span>{" "} and <span
            className="text-[#8D75FD]
]"
          >ideas.</span>
          </h1>
        </div>

        <div className="hero-img flex w-full lg:w-5/12 md:w-6/12 ">
            <div className="img-1 mx-2">
                <Image objectFit="cover" height={1800} width={900} src={hero1}/>
            </div>
            <div className="img-2">
                <Image objectFit="cover" height={1800} width={900} src={hero2}/>
            </div>
        </div>
            <div className="background absolute w-[32.8rem] bg-[#E36060] h-[10rem] -bottom-8 right-0"></div>
        </div>

        {/* <Swiper
                slidesPerView={1}
                loop={true}
                autoplay= {{
                    delay: 3700
                }}
                >
                {
                    data.map((value, index) => (
                        <SwiperSlide key={index}><Slide data={value}></Slide></SwiperSlide>
                    ))
                }
            
            </Swiper> */}
      </div>
    </section>
  );
}

function Slide({ data }) {
  const { id, title, category, img, published, description, author } = data;

  return (
    <div className="grid md:grid-cols-2">
      <div className="image">
        <div href={`/posts/${id}`}>
          <a>
            <img
              src={img || "/"}
              width={600}
              height={600}
              alt={`${title}'s picture`}
              loading="lazy"
            />
          </a>
        </div>
      </div>
      <div className="info flex justify-center flex-col">
        <div className="title">
          <div href={`/posts/${id}`}>
            <h3 className="text-3xl md:text-6xl font-bold text-gray-800 hover:text-gray-600">
              {title || "Unknown"}
            </h3>
          </div>
        </div>
        <p className="text-gray-500 py-3">{description || "description"}</p>
      </div>
    </div>
  );
}
