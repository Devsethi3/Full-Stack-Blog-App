const MenuPost = () => {
  return (
    <div>
      <div className="py-3 rounded-md bg-[#ff4c4caa]">
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
  );
};

export default MenuPost;
