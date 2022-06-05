import React from 'react';

import { useSelector } from "react-redux";

import styles from './GenreBadge.module.css';

 const GenreBadge = ({genre_ids}) => {
    const genres = useSelector(({ genres: { genres } }) => genres);
    const genresForOneMovie = genre_ids.map(value => genres.find(genre => genre.id === value));

    return (
        <div className={styles.wrapper}>
            {
                genresForOneMovie.map(({ name, id }) => (<div key={id} className={styles.genre}>{name}</div>))
            }
        </div>
    );
}
export default GenreBadge