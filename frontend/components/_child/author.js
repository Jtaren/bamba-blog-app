import Image from "next/image";
import Link from "next/link";
import imageUrlBuilder from "@sanity/image-url";

export default function author({ name, img }) {
  console.log("This is from Author", name);

  if (!name && !img) return <></>;

  function urlFor(source) {
    return imageUrlBuilder(client).image(source);
  }

  return (
    <div className="author flex py-5">
      <img
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
  );
}
