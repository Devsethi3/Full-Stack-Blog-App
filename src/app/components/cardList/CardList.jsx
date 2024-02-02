import Image from "next/image";
import Pagination from "../pagination/Pagination";
import Card from "../card/Card";

const CardList = () => {
  return (
    <div className="card-list">
      <div className="flex flex-col">
        <h1 className="text-3xl font-bold">Recent Posts</h1>
        <div className="posts mt-[3rem]">
          <Card />
          <Card />
          <Card />
        </div>
        <Pagination />
      </div>
    </div>
  );
};

export default CardList;
