import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Button from "./Button";
import "./MovieDetail.scss";
import Trailer from "./Trailer";

const DEFAULT_PLACEHOLDER_IMAGE =
  "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";

const youtubeUrl = [
  { id: "tt0371746", url: "https://www.youtube.com/watch?v=8ugaeA-nMTc " },
  { id: "tt1300854", url: "https://www.youtube.com/watch?v=Ke1Y3P9D0Bc" },
  { id: "tt0145487", url: "https://www.youtube.com/watch?v=t06RUxPbp_c" },
  { id: "tt1228705", url: "https://www.youtube.com/watch?v=wKtcmiifycU" },
  { id: "tt10872600", url: "https://www.youtube.com/watch?v=JfVOs4VSpmA" },
  { id: "tt0770828", url: "https://www.youtube.com/watch?v=wArmHSPIvlQ" },
  { id: "tt2250912", url: "https://www.youtube.com/watch?v=rk-dF1lIbIg" },
  { id: "tt0316654", url: "https://www.youtube.com/watch?v=nq1M_Wc4FIc" },
  { id: "tt0948470", url: "https://www.youtube.com/watch?v=-tnxzJ0SSOw" },
  { id: "tt4633694", url: "https://www.youtube.com/watch?v=g4Hbz2jLxvQ" },
  { id: "tt0413300",url: "https://www.youtube.com/watch?v=e5wUilOeOmg" },
  { id: "tt6320628",url: "https://www.youtube.com/watch?v=Nt9L1jCKGnE" },
  { id: "tt0352248",url: "https://www.youtube.com/watch?v=e5wUilOeOmg" },
  { id: "tt0095953",url: "https://www.youtube.com/watch?v=mlNwXuHUA8I" },
  { id: "tt1872181",url: "https://www.youtube.com/watch?v=nbp3Ra3Yp74" },
  { id: "tt5095030",url: "https://www.youtube.com/watch?v=ZlNFpri-Y40" },
  { id: "tt0454848",url: "https://www.youtube.com/watch?v=sDC6ioDV4uc" },
  { id: "tt0328107",url: "https://www.youtube.com/watch?v=ALKCTuH79iE" },
  { id: "tt1068680",url: "https://www.youtube.com/watch?v=dDh1l3qVNoY" },
  { id: "tt1638355",url: "https://www.youtube.com/watch?v=-x08iNZ8Mfc" },
];



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

  // https://www.youtube.com/watch?v=8ugaeA-nMTc // iron 1
  // https://www.youtube.com/watch?v=Ke1Y3P9D0Bc // iron 4
  //https://www.youtube.com/watch?v=wKtcmiifycU // iron 2

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
        <p>({movie.Year})</p>
        <span>
          {youtubeUrl.map((item) => {
            if (movie.imdbID == item.id) {
              return (
                <Link className="button-youtube" to={item.url}>
                  Watch Trailer Now
                </Link>
              );
            } else {
              return false;
            }
          })}
        </span>
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
        </ul>{" "}
      </div>
      <Link to="/">
        {" "}
        <Button></Button>
      </Link>
      <span>Test</span>
    </div>
  );
}
