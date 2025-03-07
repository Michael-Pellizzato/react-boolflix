import { createContext, useContext } from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [serie, setSerie] = useState([]);

  const url = import.meta.env.VITE_TMDB_URL;
  const token = import.meta.env.VITE_TMDB_API_TOKEN;

  function chiamataApiMovie() {
    const options = {
      method: "GET",
      url: `${url}movie?query=${search}&include_adult=true&language=en-US&page=1`,
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .request(options)
      .then((res) => setMovies(res.data.results))
      .catch((err) => console.error(err));
  }

  function chiamataApiSerie() {
    const options = {
      method: "GET",
      url: `${url}tv?query=${search}&include_adult=true&language=en-US&page=1`,
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .request(options)
      .then((res) => setSerie(res.data.results))
      .catch((err) => console.error(err));
  }

  const handleSummit = (e) => {
    e.preventDefault();
    chiamataApiMovie();
    chiamataApiSerie();
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };

  const value = {
    movies,
    chiamataApiMovie,
    handleSummit,
    handleSearch,
    chiamataApiSerie,
    serie,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

//custom hooks
const useGlobalContext = () => useContext(GlobalContext);

export { GlobalProvider, useGlobalContext };
