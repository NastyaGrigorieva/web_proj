import { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import queryString from "query-string";
import styles from "./SearchPanel.module.css";
import { DropDown } from "./DropDown";
import { getMoviesBySearchValue } from "../../../services";

export const SearchPanel = () => {
    const location = useLocation();
    const history = useHistory();
    const { theme } = useSelector(({theme}) => theme);
    const [searchValue, setSearchValue] = useState('');
    const [dropDownIsVisible, setDropDownIsVisible] = useState(true);
    const [searchItems, setSearchItems] = useState([]);
    const [loading, setLoading] = useState(false);

    const typeSearchValue = async ({ currentTarget: { value } }) => {
        setSearchValue(value);
        setDropDownIsVisible(true);

        if (value) {
            try {
                setLoading(true);
                setSearchItems([]);
                const { results } = await getMoviesBySearchValue(`?query=${value}`) || {};
                setSearchItems(results);
            } catch (e) {
                console.error(e);
            } finally {
                setLoading(false)
            }
        }
    };

    const getMoviesFromDB = async (e) => {
        e.preventDefault();
        const query = queryString.parse(location.search);
        query.query = searchValue;
        query.page = '1';

        if(!searchValue) delete query.query;

        history.push('/movies?' + queryString.stringify(query));
        setSearchValue('');
    };

    return (
        <div className={styles.wrapper} onMouseLeave={() => setDropDownIsVisible(false)}>
            <form onSubmit={getMoviesFromDB}>
                <input onInput={typeSearchValue}
                       onClick={() => setDropDownIsVisible(true)}
                       value={searchValue}
                       placeholder={'search...'}
                       className={`${styles.searchInput} ${theme ? styles.dark : styles.white}`}/>
            </form>
            {
                dropDownIsVisible && searchValue && <DropDown searchItems={searchItems} loading={loading} setSearchValue={setSearchValue}/>
            }
        </div>
    );
}