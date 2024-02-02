import CardList from "../components/cardList/CardList";
import Menu from "../components/menu/Menu";

const page = () => {
  return (
    <div>
      <h1 className="text-center text-3xl font-bold mt-[2.5rem] rounded-md text-black py-3 bg-[#C2FFB5]">Style Blog</h1>
      <div className="flex post-group gap-[4.5rem] mt-[4rem]">
        <CardList />
        <Menu />
      </div>
    </div>
  );
};

export default page;
