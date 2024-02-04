import Image from "next/image";
import Pagination from "../pagination/Pagination";
import Card from "../card/Card";

const getData = async (page) => {
  const res = await fetch(`http://localhost:3000/api/posts?page=${page}}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed");
  }
  return res.json();
};

const CardList = async ({ page }) => {
  const data = await getData(page);
  return (
    <div className="card-list">
      <div className="flex flex-col">
        <h1 className="text-3xl font-bold">Recent Posts</h1>
        <div className="posts mt-[3rem]">
          <Card />
          {/* {data?.map((item) => (
            <Card key={item.id} />
          ))} */}
        </div>
        <Pagination />
      </div>
    </div>
  );
};

export default CardList;
