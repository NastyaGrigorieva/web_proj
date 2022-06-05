import {useNavigate} from "react-router-dom";
import {useLocation} from "react-router-dom";

import { useSelector } from "react-redux";
import queryString from "query-string";

import styles from './Pagination.module.css';
// import {ScrollToTopOnMount} from "../../CV/ScrollToTopOnMount/ScrollToTopOnMount";//

export const Pagination = () => {
    const { page, total_pages, theme } = useSelector(({ movies, theme }) => ({ ...movies, ...theme }));
    const location = useLocation();
    let history = useNavigate();

    const handlerClick = (page) => {
        const query = queryString.parse(location.search);
        query.page = page;

        history.push('/movies?' + queryString.stringify(query));
    }

    const activeBtnTheme = `${styles.btn} ${theme ? styles.dark : styles.white}`;

    return (
        <div className={styles.wrapper}>
            {/*<ScrollToTopOnMount/>*/}
            <div className={styles.nav}>
                <button
                    className={`${activeBtnTheme} ${page <= 1 ? theme ? styles.disableDark : styles.disableWhite : ''}`}
                    disabled={page <= 1}
                    onClick={() => handlerClick(1)}>first page
                </button>
                <button
                    className={`${activeBtnTheme} ${page <= 1 ? theme ? styles.disableDark : styles.disableWhite : ''}`}
                    disabled={page <= 1}
                    onClick={() => handlerClick(page - 1)}>prev page
                </button>
                <span>{page} of {total_pages}</span>
                <button
                    className={`${activeBtnTheme} ${page >= total_pages ? theme ? styles.disableDark : styles.disableWhite : ''}`}
                    disabled={page >= total_pages}
                    onClick={() => handlerClick(page + 1)}>next page
                </button>
                <button
                    className={`${activeBtnTheme} ${page >= total_pages ? theme ? styles.disableDark : styles.disableWhite : ''}`}
                    disabled={page >= total_pages}
                    onClick={() => handlerClick(total_pages)}>last page
                </button>
            </div>
        </div>
    );
}