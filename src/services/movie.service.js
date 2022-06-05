import axios from "axios";

const getMovies = async (params) => {
    const { data } = await axios.get('/discover/movie', { params }) || {};
    return data;
}

const getMoviesBySearchValue = async (params) => {
    const { data } = await axios.get(`/search/movie${params}`) || {};
    return data;
}

 export const getMovieDetailsById = async (movieId) => {
    const { data } = await axios.get(`/movie/${movieId}?append_to_response=videos`) || {};
    return data;
}


module.exports = { getMovies, getMoviesBySearchValue, getMovieDetailsById };
