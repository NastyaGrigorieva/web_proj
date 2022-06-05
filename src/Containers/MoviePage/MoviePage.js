import { useEffect } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import queryString from "query-string";

import styles from "./MoviesPage.module.css";
import {  Header, MovieInfo, MoviesList } from "../../components";
import { setGenres, setLoading, setMovies } from "../../reactRedu/"
import { getGenres, getMovies, getMoviesBySearchValue } from "../../services";

export const MoviesPage = () => {
    const dispatch = useDispatch();
    const { search } = useLocation();

    const { genres, theme } = useSelector(({ genres: { genres }, theme: { theme } }) => ({ genres, theme }));

    useEffect(() => {
        (async function() {
            try {
                dispatch(setLoading(true));

                const parsed = queryString.parse(search);
                let movies;

                parsed.query
                    ? movies = await getMoviesBySearchValue(search) || {}
                    : movies = await getMovies(parsed);

                dispatch(setMovies(movies));

                if (!genres) {
                    const genres = await getGenres();
                    dispatch(setGenres(genres));
                }
            } catch (e) {
                console.error(e);
            } finally {
                dispatch(setLoading(false));
            }
        })();
    }, [dispatch, genres, search]);

    return (
        <>
            {/*<Hide/>*/}
            <Header/>
            <div className={`${styles.movies_page} ${theme ? styles.dark : styles.white}`}>
                <Switch>
                    <Route exact path="/movies/:id" component={MovieInfo}/>
                    <Route path="/movies" component={MoviesList}/>
                </Switch>
            </div>
            {/*<Footer/>*/}
        </>
    );
}