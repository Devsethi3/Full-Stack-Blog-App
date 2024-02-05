import Image from "next/image";
import Menu from "../../components/menu/Menu";
import Comments from "../../components/comments/Comments";

const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const SinglePage = async ({ params }) => {
  const { slug } = params;
  const data = await getData(slug);
  return (
    <>
      <div className="grid grid-cols-2 mt-[3rem] gap-8">
        <div className="content">
          <h1 className="text-6xl font-bold">{data.title}</h1>
          <div className="flex items-center gap-4 mt-[5rem]">
            {data?.img && (
              <Image
                className="rounded-full"
                src={data.img}
                width={35}
                height={35}
              />
            )}
            <div className="flex flex-col">
              <p className="font-medium">William Randolph</p>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                12 January 2024
              </span>
            </div>
          </div>
        </div>
        <div className="post-img">
          <Image src="/images/p1.jpeg" className="image rounded-md" fill />
        </div>
      </div>
      <div className="flex post-group gap-[4.5rem] mt-[4rem]">
        <div className="card-list">
          <div dangerouslySetInnerHTML={{ __html: data?.desc }} />
          {/* <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis
              neque non accusantium nulla ut, velit rerum, quis, iusto tempora
              error atque ipsum. Voluptates autem exercitationem officia est
              nulla unde neque? Alias, aliquam neque impedit nihil, eius,
              dolores veritatis quo aliquid nesciunt debitis laudantium
              perspiciatis amet voluptatum deserunt. Asperiores reiciendis,
              veritatis ad voluptas possimus dolorum nihil magni mollitia
              molestiae incidunt nesciunt!
            </p>
            <p className="text-justify mt-5">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, est
              veritatis, quos aliquid minima itaque, ut distinctio maxime
              molestias molestiae facilis nostrum odio recusandae aut aperiam
              nesciunt iure in? Alias quis impedit delectus voluptatem facilis
              vero nesciunt quo animi dolor saepe? Nihil culpa voluptatem magni
              porro quo ad praesentium velit neque dolore nobis, nostrum
              repudiandae perspiciatis, magnam tenetur laborum eum quidem,
              aliquid iusto adipisci pariatur voluptates? Nam tenetur accusamus
              praesentium provident nisi consectetur? Est cupiditate, provident
              alias sequi ex quaerat! Facilis mollitia omnis atque ipsam autem
              esse officiis nulla excepturi recusandae id nihil beatae possimus,
              dolor, molestias fugiat quos molestiae voluptates? Officia sequi
              quo eligendi perspiciatis aliquid eum veritatis. Quibusdam
              consequuntur, nulla distinctio quo, sed et sequi quia quod
              cupiditate molestias praesentium labore assumenda? Aut soluta
              molestias explicabo id ratione iure? Voluptates fugit.
            </p>
            <p className="text-justify mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
              laudantium culpa magni. Deleniti et eos quisquam laudantium
              sapiente asperiores esse facilis suscipit. Dolor animi quidem
              officiis, vel optio autem in saepe iure, ipsam est ab illo
              veritatis iste rerum corporis inventore facere ullam obcaecati quo
              sapiente quam commodi nesciunt? Blanditiis.
            </p> */}
          <Comments />
        </div>
        <Menu />
      </div>
    </>
  );
};

export default SinglePage;
