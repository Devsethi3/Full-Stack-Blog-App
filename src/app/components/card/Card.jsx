import Image from "next/image";
import Link from "next/link";

const Card = ({ key, item }) => {
  return (
    <div className="post-grid mb-[3rem] grid grid-cols-2 gap-[4rem]">
      {item.img && (
        <div className="post-img">
          <Image src={item.img} className="image rounded-md" fill />
        </div>
      )}
      <div className="post-content my-3 flex items-start justify-between flex-col">
        <p className="date text-sm">
          {item.createdAt.substring(0, 10)} -{" "}
          <span className="text-red-500 uppercase font-medium">
            {item.catSlug}
          </span>
        </p>
        <Link
          href={`/posts/${item.slug}`}
          className="text-3xl post-title font-bold"
        >
          {item.title}
        </Link>
        <p className="text-justify text-sm">{item.desc.substring(0, 50)}</p>
        <Link
          href={`/posts/${item.slug}`}
          className="font-medium border-b-2 border-red-500"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
