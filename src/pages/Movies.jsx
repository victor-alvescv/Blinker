import { Link } from "react-router-dom";
import "../components/Movies.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Jelly } from "@uiball/loaders";
import startImg from "../start__img.svg";

function Movies({ search }) {
  const [movieName, setMovieName] = useState(search);
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);

  function searchHome() {
    setMovieName(search);
  }

  useEffect(() => {
    searchHome();
  }, [search]);

  async function fetchData(searchTerm) {
    const { data } = await axios.get(
      `https://omdbapi.com/?s=${searchTerm}&page=1&apikey=e3aee4a2`
    );

    if (data.Search !== undefined) {
      setMovies(data.Search.slice(0, 6));
      setLoading(false);
    }
  }

  function setMovie(event) {
    setMovieName(event);
  }

  useEffect(() => {
    setTimeout(() => {
      fetchData(movieName);
    }, 1000);
    setLoading(true);
  }, [movieName]);

  console.log();

  return (
    <div id="app">
      <div
        className="flex flex-col app-style"
        style={{ display: "flex", flex: "1 1 0%", backgroundColor: "#07142b" }}
      >
        <div className="navbar flex flex-col">
          <div
            className=" mobile-ver flex content-wrapper justify-between align-center"
            style={{ flexDirection: "row", zIndex: "1005" }}
          >
            <div className="logo">
              <img
                src="https://dev.d24jig8s1lr7n9.amplifyapp.com/img/whitelogo.39850b27.png"
                className="logo"
                alt="blinker logo"
              />
            </div>
            <div className="links flex align-center justify-between">
              <Link className="link link-movie router-link-active" to="/">
                Home
              </Link>
              <a
                className="link link-movie router-link-exact-active router-link-active"
                href=""
              >
                Find your Movie
              </a>
              <span style={{cursor: 'default'}} className="btn-contact">Contact</span>
            </div>
          </div>
          <div
            className="content-wrapper content-wrapper-movies flex-col align-center"
            style={{ marginTop: "40px" }}
          >
            <h1>Browse our movies</h1>
            <div className="input-wrap">
              <input
                type="text"
                placeholder="Search by Name and find the best..."
                className="input-movies"
                onChange={(event) => setMovie(event.target.value)}
                value={movieName}
              />
            </div>
          </div>
          <div className="overlay"></div>
        </div>
        <div id="filter" className="content-wrapper justify-between">
          <h1 className="search-info">
            {movieName && (
              <span className="black-txt">
                {" "}
                Search results:{" "}
                <span
                  style={{ color: "#f8f8f8", opacity: "0.5", fontSize: "25px" }}
                >
                  {'"' + movieName + '"'}
                </span>
              </span>
            )}

            <span
              style={{
                whiteSpace: "nowrap",
                overflow: "hidden",
                maxWidth: "500px",
                color: "white",
                fontWeight: "800",
                fontSize: "20px",
                marginLeft: "5px",
              }}
            ></span>
            <span
              className="searchName"
              style={{ color: "#f8f8f8", opacity: "0.5" }}
            ></span>
          </h1>
          <div className="price-filter flex flex-col"></div>
        </div>
        <section className="search">
          <div className="movies">
            {movieName === "" && (
              <div className="content-wrapper">
                <div className="img__wrapper">
                  <img className="initial__img" src={startImg} alt="" />
                </div>
                <h2 className="img__text">
                  Start your search inside{" "}
                  <span style={{ color: "#b62265" }}>our library!</span>
                </h2>
                <h3 style={{ color: "white" }}>
                  The best service{" "}
                  <span style={{ color: "#b62265" }}>for you.</span>
                </h3>
              </div>
            )}
            {loading && movieName ? (
              <Jelly size={60} speed={0.9} color="#b62265" />
            ) : (
              movies.map((movie, index) => (
                <div className="movie" key={index}>
                  <img src={movie.Poster} alt="" />
                  <h2
                    style={{
                      textTransform: "none",
                      marginBottom: "none",
                      opacity: "1",
                    }}
                  >
                    {movie.Title}
                  </h2>
                  <h4>{movie.Year}</h4>
                  <Link to={`${movie.imdbID}`}>
                    <button>Learn More</button>
                  </Link>
                </div>
              ))
            )}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Movies;
