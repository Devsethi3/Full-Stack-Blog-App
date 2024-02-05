import Link from "next/link";
// import CategoryItem from "./CategoryItem";
import Image from "next/image";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/categories", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed");
  }
  return res.json();
};

const categories = [
  {
    bgColor: "bg-[#57c4ff70]",
  },
  {
    bgColor: "bg-[#ff575770]",
  },
  {
    bgColor: "bg-[#73ff5770]",
  },
  {
    bgColor: "bg-[#a357ff70]",
  },
  {
    bgColor: "bg-[#ff9d5770]",
  },
  {
    bgColor: "bg-[#ff795770]",
  },
  {
    bgColor: "bg-[#57c4ff70]",
  },
  {
    bgColor: "bg-[#ffee5770]",
  },
];

const CategoryList = async () => {
  const data = await getData();
  return (
    <>
      <div>
        <h1 className="text-3xl font-bold">Popular Categories</h1>
        <div className="category-grid mt-4 grid gap-4 grid-cols-6">
          {data?.map((item, index) => (
            <Link key={item.id} href="/blog?cat=style">
              <div
                className={`flex items-center py-3 rounded-md ${
                  categories[index % categories.length].bgColor
                } py-2 gap-4 justify-center`}
              >
                {item.img && (
                  <Image
                    className="rounded-full"
                    src={item.img}
                    width={32}
                    height={32}
                  />
                )}
                <p className="font-medium category-text text-[1.1rem]">
                  {item.title}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default CategoryList;
