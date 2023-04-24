import axios from "axios";
import React, { useEffect, useState } from "react";
import "../components/Detail.css";
import { useParams } from "react-router-dom";
import NavDetail from "../components/NavDetail";
import { Jelly } from "@uiball/loaders";

function MovieDetail() {
  const [detail, setDetail] = useState("");
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  async function detailFetch() {
    const { data } = await axios.get(
      `https://www.omdbapi.com/?apikey=e3aee4a2&i=${id}`
    );
    setDetail(data);
    setLoading(false);
  }

  useEffect(() => {
    setTimeout(() => {
      detailFetch();
    }, 1000);
  }, []);


  return (
    <>
      <div className="overlay-detail"></div>
      <NavDetail />
      {loading === true && (
        <>
          <div
            className="detail__wrapper"
            style={{ backgroundColor: "transparent" }}
          >
            <Jelly size={60} speed={0.9} color="#b62265" />
          </div>
        </>
      )}
      {loading === false && (
        <div className="detail__wrapper">
          <figure className="detail__img--wrapper">
            <img className="detail__img" src={detail.Poster} alt="" />
          </figure>
          <div className="detail__details--wrapper">
            <div className="header__detail">
              <h2 className="detail__title" style={{ opacity: "1" }}>
                {detail.Title}
              </h2>
              <p className="detail__runtime" style={{ fontSize: "12px" }}>
                {detail.Runtime}, {detail.Year}
              </p>
            </div>
            <p className="detail__genre">
              {" "}
              Genres:{" "}
              <span style={{ color: "#ff328f", fontWeight: "bold" }}>
                {detail.Genre}
              </span>
            </p>
            <p className="detail__direct">
              Director:{" "}
              <span style={{ color: "#ff328f", fontWeight: "bold" }}>
                {detail.Director}
              </span>
            </p>
            <p className="detail__actors">
              Actors:{" "}
              <span style={{ color: "#ff328f", fontWeight: "bold" }}>
                {detail.Actors}
              </span>
            </p>
            <p className="detail__imdb-rating">
              Imdb Rating:{" "}
              <span style={{ color: "#ff328f", fontWeight: "bold" }}>
                {detail.imdbRating}
              </span>
            </p>
            <p className="detail__plot" style={{ color: "#afafaf" }}>
              {detail.Plot}
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default MovieDetail;
