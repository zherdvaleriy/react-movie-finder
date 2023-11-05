import { Link } from "react-router-dom";

const DEFAULT_PLACEHOLDER_IMAGE =
  "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";

export default function Movie({ movie }) {
  const poster =
    movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;

  return (
    <div className="movie">
      <Link to={`/movie/${movie.imdbID}`}>
        <h2>{movie.Title}</h2>

        <div>
          <img
            src={poster}
            alt={`The movie titled: ${movie.Title}`}
            width="270"
            height={400}
          />
        </div>
        <p>({movie.Year}) </p>
      </Link>
    </div>
  );
}
