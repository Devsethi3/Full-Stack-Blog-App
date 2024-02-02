import CardList from "./components/cardList/CardList";
import CategoryList from "./components/categoryList/CategoryList";
import Featured from "./components/featured/Featured";
import Menu from "./components/menu/Menu";

const page = () => {
  return (
    <>
      <Featured />
      <CategoryList />
      <div className="flex post-group gap-[4.5rem] mt-[4rem]">
        <CardList />
        <Menu />
      </div>
    </>
  );
};

export default page;
