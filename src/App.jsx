import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import './App.css'
import MovieDetail from "./components/MovieDetail";


export default function App() {
  return (

  <> 
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/movie/:imdbID" element={<MovieDetail/>} />
      <Route path="*" element={<Home/>}/>
    </Routes>
      
  </>
  )
}
