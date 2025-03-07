import { useEffect } from "react";
import { useGlobalContext } from "../context/GlobalContext";

const Cards = () => {
  /*const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  const url = import.meta.env.VITE_TMDB_URL;
  const token = import.meta.env.VITE_TMDB_API_TOKEN;

  function chiamataApi() {
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

  const handleSummit = (e) => {
    e.preventDefault();
    chiamataApi();
    console.log(movies);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };*/

  const { movies, chiamataApiMovie, serie, chiamataApiSerie } =
    useGlobalContext();

  useEffect(() => {
    chiamataApiMovie();
    chiamataApiSerie();
  }, []);

  return (
    <>
      <h2>FILM</h2>
      <div className="container">
        <div className="row">
          {movies.map((movie) => {
            return (
              <div key={movie.id} className="col-3">
                <div className="card">
                  <img
                    src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
                    alt=""
                  />
                  <p>{movie.title}</p>
                  <p>{movie.original_title}</p>
                  <p>{movie.original_language}</p>
                  <p>{movie.vote_average}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <h2>SERIE TV</h2>
      <div className="container">
        <div className="row">
          {serie.map((serie) => {
            return (
              <div key={serie.id} className="col-3">
                <div className="card">
                  <img
                    src={`https://image.tmdb.org/t/p/w342/${serie.poster_path}`}
                    alt=""
                  />
                  <p>{serie.name}</p>
                  <p>{serie.original_title}</p>
                  <p>{serie.original_language}</p>
                  <p>{serie.vote_average}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Cards;
