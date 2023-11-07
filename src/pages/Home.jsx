import { useEffect, useReducer } from "react";
import Footer from "../components/Footer";
import Movie from "../components/Movie";
import Search from "../components/Search";
import { ThemeProvider } from "../ThemeContext";
import { useTheme } from "../ThemeContext";


const MOVIE_API_URL = "https://www.omdbapi.com/?s=man&apikey=f4c06ce5";

const initialState = {
  loading: true,
  movies: [],
  errorMessage: null,
  page: 1,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_MOVIES_REQUEST":
      return {
        ...state,
        loading: true,
        errorMessage: null,
      };
    case "SEARCH_MOVIES_SUCCESS":
      return {
        ...state,
        loading: false,
        movies: action.payload,
      };
    case "SEARCH_MOVIES_FAILURE":
      return {
        ...state,
        loading: false,
        errorMessage: action.error,
      };
    case "LOAD_MORE":
      return {
        ...state,
        page: state.page + 1,
      };
    default:
      return state;
  }
};

function Home() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { isDarkTheme, toggleTheme } = useTheme();

  const handleThemeToggle = () => {
    toggleTheme();
  };

  useEffect(() => {
    fetch(`${MOVIE_API_URL}&page=${state.page}`)
      .then((response) => response.json())
      .then((jsonResponse) => {
        console.log(jsonResponse);
        dispatch({
          type: "SEARCH_MOVIES_SUCCESS",
          payload: jsonResponse.Search,
        });
      });
  }, [state.page]);

  const search = (searchValue) => {
    dispatch({
      type: "SEARCH_MOVIES_REQUEST",
    });

    fetch(
      `https://www.omdbapi.com/?s=${searchValue}&apikey=f4c06ce5&page=${state.page}`
    )
      .then((response) => response.json())
      .then((jsonResponse) => {
        if (jsonResponse.Response === "True") {
          dispatch({
            type: "SEARCH_MOVIES_SUCCESS",
            payload: jsonResponse.Search,
          });
        } else {
          dispatch({
            type: "SEARCH_MOVIES_FAILURE",
            error: jsonResponse.Error,
          });
        }
      });
  };

  const { loading, errorMessage, movies } = state;

  return (
    <ThemeProvider>
      <div className={`App ${isDarkTheme ? "dark" : "light"}`}>
        <header className="App-header"></header>
        <h1 className="text">MOVIES PLANET</h1>

        <button
          
          className="btn-theme"
          onClick={handleThemeToggle}
          style={{
            position: "absolute",
            top: "120px",
            right: "50px",
            fontSize: "14px",
            
          }}
        >
          <img width={70} height={70} style={{borderRadius: '59%'}} src="https://thumbs.dreamstime.com/b/sun-moon-icon-black-illustration-isolated-vector-flat-sign-logo-web-design-eps-white-background-144163819.jpg" alt="" />
        </button>



        <Search search={search} />

        <div className="movies">
          {loading && !errorMessage ? (
            <span>loading...</span>
          ) : errorMessage ? (
            <div className="errorMessage">{errorMessage}</div>
          ) : movies && movies.length > 0 ? (
            movies.map((movie, index) => (
              <Movie key={`${index}-${movie.Title}`} movie={movie} />
            ))
          ) : (
            <div>No movies found</div>
          )}
        </div>
        <button className="btn" onClick={() => dispatch({ type: "LOAD_MORE" })}>
          LOAD MORE
        </button>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default Home;
