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

  // Check if data and data.user are defined before accessing properties
  const userName = data?.user?.name || "Unknown User";

  return (
    <>
      <div className="grid grid-cols-2 mt-[3rem] gap-8">
        <div className="content">
          <h1 className="text-6xl font-bold">{data.title}</h1>
          <div className="flex items-center gap-4 mt-[5rem]">
            {data?.user?.image ? (
              <Image
                className="rounded-full"
                src={data.user.image}
                width={35}
                height={35}
              />
            ) : (
              <Image
                className="rounded-full"
                src="/images/no-avatar.png"
                width={35}
                height={35}
              />
            )}
            <div className="flex flex-col">
              <p className="font-medium">{userName}</p>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                12 January 2024
              </span>
            </div>
          </div>
        </div>
        {data?.img && (
          <div className="post-img">
            <Image src={data.img} className="image rounded-md" fill />
          </div>
        )}
      </div>
      <div className="flex post-group gap-[4.5rem] mt-[4rem]">
        <div className="card-list">
          <div dangerouslySetInnerHTML={{ __html: data?.desc || "" }} />
          <Comments />
        </div>
        <Menu />
      </div>
    </>
  );
};

export default SinglePage;
