import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import styles from './MoviesListCard.module.css';
import  GenreBadge  from "../GenreBadge/GenreBadge";

const imgBuilder = (posterPath, size = 400) => `https://image.tmdb.org/t/p/w${size}${posterPath}`;

const MoviesListCard = ({ item }) => {
    const { theme } = useSelector(({theme}) => theme);

    const { original_title, release_date, vote_average, vote_count, poster_path, genre_ids } = item;
    let { overview } = item;

    if (overview.length > 200) {
        overview = `${overview.slice(0, 200)} ...`;
    }

    return (
        <Link to={`/movies/${item.id}`} className={styles.wrapper}>
            <div className={styles.image}>
                <img src={imgBuilder(poster_path)} alt="poster" className="scale"/>
            </div>
            <div className={`${styles.info} ${theme ? styles.dark : ''}`}>
                <h3 className={theme ? styles.darkSpan : ''}>{original_title}</h3>
                <GenreBadge genre_ids={genre_ids}/>
                <span><b className={theme ? styles.darkSpan : ''}>Rating:</b> {vote_average} (total votes: {vote_count})</span>
                <p className={styles.overview}>{overview}</p>
                <span><b className={theme ? styles.darkSpan : ''}>Release date:</b> {release_date}</span>
            </div>
        </Link>
    );
}
export default MoviesListCard;