import React, {useEffect, useState} from 'react';

import {movieService} from "../../services"
import MovieInfo from "../MovieInfo/MovieInfo";

const MovieList = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        movieService.getAll().then(({data}) => setMovies(data))
    }, [])
    return (
        <div>
            {movies.map(movie =><MovieInfo key={movie.id} movie={movie}/>)}
        </div>
    );
};

export default MovieList;