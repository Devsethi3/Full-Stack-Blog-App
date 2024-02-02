import Link from "next/link";
import Image from "next/image";

const CategoryItem = ({ href, imageSrc, label, bgColor }) => (
  <div className={`${bgColor} py-3 rounded-md`}>
    <Link href={href}>
      <div className="flex items-center gap-4 justify-center">
        <Image
          className="rounded-full"
          src={imageSrc}
          width={32}
          height={32}
        />
        <p className="font-medium category-text text-[1.1rem]">{label}</p>
      </div>
    </Link>
  </div>
);

export default CategoryItem;
