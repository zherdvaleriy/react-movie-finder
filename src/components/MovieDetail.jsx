import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Button from "./Button";
import "./MovieDetail.scss";
import Trailer from "./Trailer";



const DEFAULT_PLACEHOLDER_IMAGE =
  "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";



export default function MovieDetail() {
  const { imdbID } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    const apiUrl = `https://www.omdbapi.com/?i=${imdbID}&apikey=f4c06ce5`;
    console.log("API URL:", apiUrl);

    fetch(apiUrl)
      .then((response) => response.text())
      .then((data) => {
        console.log(data);
        return JSON.parse(data);
      })
      .then((data) => {
        setLoading(false);
        setMovie(data);
      })
      .catch((error) => {
        setLoading(false);
        setError(error.message);
      });
  }, []);

  if (loading) {
    return (
      <p style={{ fontSize: "3rem", color: "blue", textAlign: "center" }}>
        Loading...
      </p>
    );
  }

  if (error) {
    return <div className="errorMessage">{error}</div>;
  }

  const poster =
    movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;
    


  return (
    <div className="box">
      <div className="movie-item">
        <h2>{movie.Title}</h2>
        <div className="img-item">
          <img
            src={poster}
            alt={`The movie titled: ${movie.Title}`}
            width="270"
            height={400}
          />
        </div>
          <Trailer movie={movie} />
        <p>({movie.Year})</p>

   

      </div>

      <div className="info">
        <h3>Film information:</h3>
        <ul>
          <li>
            <b>Released:</b> {movie.Released}{" "}
          </li>
          <li>
            <b>Genre:</b> {movie.Genre}
          </li>
          <li>
            <b>Runtime:</b> {movie.Runtime}
          </li>
          <li>
            <b>Director:</b> {movie.Director}
          </li>
          <li>
            <b>Writer:</b> {movie.Writer}
          </li>
          <li>
            <b>Actors:</b> {movie.Actors}
          </li>
          <li>
            <b>Plot:</b> {movie.Plot}
          </li>
          <li>
            <b>Language:</b> {movie.Language}
          </li>
          <li>
            <b>Awards:</b> {movie.Awards}
          </li>


        </ul>

      </div>
          <div className="container-btn">

          <Link to="/">  
            <Button></Button>
          </Link>

          </div>
     
      </div>
  );
}
