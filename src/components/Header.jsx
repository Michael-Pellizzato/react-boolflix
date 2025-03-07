import { useGlobalContext } from "../context/GlobalContext";

const Header = () => {
  const { handleSearch, handleSummit } = useGlobalContext();

  return (
    <form onSubmit={handleSummit} action="">
      <input onChange={handleSearch} type="search" />
      <button className="btn btn-primary">cerca</button>
    </form>
  );
};

export default Header;
