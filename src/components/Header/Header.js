import React  from 'react';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import styles from './Header.module.css';
import {Navbar} from "../Mobile/Navbar";
import {SearchPanel} from "../SearchPanel";


export const Header = () => {
    const {theme} = useSelector(({theme}) => theme);

    return (
        <div className={`${styles.header} ${theme ? styles.dark : styles.white}`}>
            <Link to="/" className={`${styles.logo} ${theme ? styles.dark : styles.white}`}>
                <b><i>Home</i></b></Link>
            <SearchPanel/>
            <Navbar/>
        </div>
    );
}