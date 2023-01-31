// import Image from "next/image";
import Link from "next/link";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../../lib/client";

export default function author({ name, image }) {


  if (!name && !image) return <></>;

  function urlFor(source) {
    return imageUrlBuilder(client).image(source);
  }

  return (
    <>
    
    <div className="author flex py-5 justify-center">
      <img
        src={urlFor(image).width(60).height(60).url() || ""}
        loading="lazy"
        width={60}
        height={60}
        className="rounded-full"
        alt={`${name}'s picture`}
      />
      <div className="flex flex-col justify-center px-4">
        <Link href={"/"}>
          <a className="text-md font-bold text-[#802ccc] hover:text-gray-600">
            {name || "No Name"}
          </a>
        </Link>
        {/* <span className="text-sm text-gray-500">{designation || ""}</span> */}
     
      </div>
    </div>
    </>
  );
}
