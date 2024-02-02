import Image from "next/image";
import Link from "next/link";

const Menu = () => {
  return (
    <div className="menu">
      <div className="">
        <h4 className="text-gray-600">What's hot</h4>
        <h1 className="text-3xl font-bold mb-8">Most Popular</h1>
        <div className="flex flex-col gap-6">
          <Link href="/">
            <div>
              <span className="text-xs px-2.5 py-1 rounded-full text-white bg-[#ff46469a]">
                Travel
              </span>
              <p className="font-medium pt-2 category-text text-xs">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
                temporibus, dolores molestias odio fugiat.
              </p>
              <p className="text-xs pt-1">John Doe · 01.02.2024</p>
            </div>
          </Link>
          <Link href="/">
            <div>
              <span className="text-xs px-2.5 py-1 rounded-full text-white bg-[#a646ff9a]">
                Fashion
              </span>
              <p className="font-medium pt-2 category-text text-xs">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
                temporibus, dolores molestias odio fugiat.
              </p>
              <p className="text-xs pt-1">John Doe · 01.02.2024</p>
            </div>
          </Link>
          <Link href="/">
            <div>
              <span className="text-xs px-2.5 py-1 rounded-full text-white bg-[#0fb32d9a]">
                Coding
              </span>
              <p className="font-medium pt-2 category-text text-xs">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
                temporibus, dolores molestias odio fugiat.
              </p>
              <p className="text-xs pt-1">John Doe · 01.02.2024</p>
            </div>
          </Link>
        </div>
      </div>
      <h4 className="text-gray-600 mt-[3rem]">Discover by topic</h4>
      <h1 className="text-3xl font-bold mb-8">Categories</h1>
      <div className="grid grid-cols-2 gap-2">
        <div className="py-3 rounded-md bg-[#73ff5770]">
          <Link href="/">
            <div className="flex items-center gap-4 justify-center">
              <Image
                className="rounded-full"
                src="/images/culture.png"
                width={32}
                height={32}
              />
              <p className="font-medium category-text text-[1.1rem]">Fashion</p>
            </div>
          </Link>
        </div>
        <div className="py-3 rounded-md bg-[#a357ff70]">
          <Link href="/">
            <div className="flex items-center gap-4 justify-center">
              <Image
                className="rounded-full"
                src="/images/coding.png"
                width={32}
                height={32}
              />
              <p className="font-medium category-text text-[1.1rem]">Sports</p>
            </div>
          </Link>
        </div>
        <div className="py-3 rounded-md bg-[#ff795770]">
          <Link href="/">
            <div className="flex items-center gap-4 justify-center">
              <Image
                className="rounded-full"
                src="/images/food.png"
                width={32}
                height={32}
              />
              <p className="font-medium category-text text-[1.1rem]">Study</p>
            </div>
          </Link>
        </div>
        <div className="py-3 rounded-md bg-[#57c4ff70]">
          <Link href="/">
            <div className="flex items-center gap-4 justify-center">
              <Image
                className="rounded-full"
                src="/images/style.png"
                width={32}
                height={32}
              />
              <p className="font-medium category-text text-[1.1rem]">Style</p>
            </div>
          </Link>
        </div>
      </div>
      <div className="mt-[3rem]">
        <h4 className="text-gray-600">Choosen by the editor</h4>
        <h1 className="text-3xl font-bold mb-8">Editors Pick</h1>
        <div className="flex flex-col gap-6">
          <Link href="/">
            <div className="flex items-center gap-4">
              <Image
                className="rounded-full"
                src="/images/culture.png"
                width={60}
                height={60}
              />
              <div>
                <span className="text-xs px-2.5 py-1 rounded-full text-white bg-[#ff46469a]">
                  Travel
                </span>
                <p className="font-medium pt-2 category-text text-xs">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                  dolore nisi corrupti.
                </p>
                <p className="text-xs pt-1">John Doe · 01.02.2024</p>
              </div>
            </div>
          </Link>
          <Link href="/">
            <div className="flex items-center gap-4">
              <Image
                className="rounded-full"
                src="/images/culture.png"
                width={60}
                height={60}
              />
              <div>
                <span className="text-xs px-2.5 py-1 rounded-full text-white bg-[#a646ff9a]">
                  Fashion
                </span>
                <p className="font-medium pt-2 category-text text-xs">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                  dolore nisi corrupti.
                </p>
                <p className="text-xs pt-1">John Doe · 01.02.2024</p>
              </div>
            </div>
          </Link>
          <Link href="/">
            <div className="flex items-center gap-4">
              <Image
                className="rounded-full"
                src="/images/culture.png"
                width={60}
                height={60}
              />
              <div>
                <span className="text-xs px-2.5 py-1 rounded-full text-white bg-[#0fb32d9a]">
                  Coding
                </span>
                <p className="font-medium pt-2 category-text text-xs">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                  dolore nisi corrupti.
                </p>
                <p className="text-xs pt-1">John Doe · 01.02.2024</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Menu;
