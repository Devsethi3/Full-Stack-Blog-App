import CategoryItem from "./CategoryItem";

const categories = [
  {
    href: "/blog",
    imageSrc: "/images/style.png",
    label: "Style",
    bgColor: "bg-[#57c4ff70]",
  },
  {
    href: "/blog",
    imageSrc: "/images/travel.png",
    label: "Travel",
    bgColor: "bg-[#ff575770]",
  },
  {
    href: "/blog",
    imageSrc: "/images/culture.png",
    label: "Culture",
    bgColor: "bg-[#73ff5770]",
  },
  {
    href: "/blog",
    imageSrc: "/images/style.png",
    label: "Style",
    bgColor: "bg-[#a357ff70]",
  },
  {
    href: "/blog",
    imageSrc: "/images/food.png",
    label: "Food",
    bgColor: "bg-[#ff9d5770]",
  },
  {
    href: "/blog",
    imageSrc: "/images/coding.png",
    label: "Family",
    bgColor: "bg-[#ff795770]",
  },
  {
    href: "/blog",
    imageSrc: "/images/style.png",
    label: "Style",
    bgColor: "bg-[#57c4ff70]",
  },
  {
    href: "/blog",
    imageSrc: "/images/food.png",
    label: "Shopping",
    bgColor: "bg-[#ffee5770]",
  },
];

const CategoryList = () => {
  return (
    <>
      <h1 className="text-3xl font-bold mt-[4rem] mb-[2rem]">
        Popular Categories
      </h1>
      <div className="category-grid grid grid-cols-5 gap-4">
        {categories.map((category, index) => (
          <CategoryItem key={index} {...category} />
        ))}
      </div>
    </>
  );
};

export default CategoryList;
