import { FC } from 'react';
import styles from './genres.module.css';

const Genres: FC<{ genres: string[] }> = ({ genres }) => {
    return (
        <ul className={styles.genres}>
            {genres.map((genre) => {
                return (
                    <li className={styles.genre}>
                        <p>{genre}</p>
                    </li>
                );
            })}
        </ul>
    );
};

export default Genres;
