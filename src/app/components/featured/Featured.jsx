import Image from "next/image";

const Featured = () => {
  return (
    <div className="my-3">
      <h1 className="text-7xl">
        <strong>Hey, Dev Sethi Here!</strong> Discover my stories and creative
        ideas{" "}
      </h1>
      <div className="grid grid-cols-2 items-center gap-6 mt-[3rem]">
        <div className="img-container">
          <Image src="/images/p1.jpeg" className="image" fill />
        </div>
        <div className="content">
          <h1 className="text-5xl mb-8 font-semibold">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
            vitae tenetur quis tempore sunt voluptatem! Provident voluptas quam
            minima nobis totam molestiae soluta dolores? Deserunt dicta
            cupiditate fugiat nesciunt nisi? Autem illum eius dolore mollitia,
            quisquam excepturi quo iste nesciunt.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            modi ut nobis ducimus autem cumque quam iste eius recusandae alias?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Featured;
