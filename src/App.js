import logo from './logo.svg';
import './App.css';
import MovieList from "./components/MoviesList/MovieList";
import MovieInfo from "./components/MovieInfo/MovieInfo";

function App() {
  return (
    <div className="App">
      <MovieList/>
        <MovieInfo/>
    </div>
  );
}

export default App;
