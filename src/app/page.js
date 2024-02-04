import CardList from "./components/cardList/CardList";
import CategoryList from "./components/categoryList/CategoryList";
import Featured from "./components/featured/Featured";
import Menu from "./components/menu/Menu";

const Home = ({ searchParams }) => {
  const page = parseInt(searchParams.page) || 1;
  return (
    <>
      <Featured />
      <CategoryList />
      <div className="flex post-group gap-[4.5rem] mt-[4rem]">
        <CardList page={page} />
        <Menu />
      </div>
    </>
  );
};

export default Home;
