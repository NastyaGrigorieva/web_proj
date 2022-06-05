import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from './User.module.css';

export const User = () => {
    const { theme } = useSelector(({ theme }) => theme);

    return (
        <div className={styles.wrapper}>
            <Link to="/myCV" className={`${styles.logo} ${theme ? styles.dark : styles.white}`}><b><i>myCV</i></b></Link>
            <Link to="/myCV" className={styles.img}>
                {
                    theme
                        ? <img src={"/user1.png"} alt="icon"/>
                        : <img src={"/user2.png"} alt="icon"/>
                }
            </Link>
        </div>
    );
}