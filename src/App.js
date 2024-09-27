// Bootstrap styling
import 'bootstrap/dist/css/bootstrap.css'; // Instead of 'bootstrap.min.css'
import './App.css';

import { useEffect, useState,  } from 'react';
// import axios from 'axios';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';
import AddFavorite from './components/AddFavorite';


const App = () => {

  const [movies, setMovies] = useState([])
  const [searchValue, setSearchValue] = useState('');

// fetching the API
const getMovieRequest = async() => {
  const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=dff70fd6`

  const response = await fetch(url);
  const responsejson = await response.json();
  
  if (responsejson.Search) {
    setMovies(responsejson.Search);
  }
}

useEffect(() => {
  getMovieRequest(searchValue)
})

  return (
    <div className="container-fluid movie-app">
      <div className='row d-flex align-items-center mt-4 mb-4'>
        <MovieListHeading heading="Movies"/>
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
      </div>
      <div className='row'>
        <MovieList movies={movies} FavouriteComponent={AddFavorite}/>
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
    </div>
  );
}

export default App;
