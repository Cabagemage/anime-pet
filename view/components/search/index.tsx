import { FC } from 'react';
import styles from './search.module.css';

const Search: FC = () => {
    return (
        <div className={styles.search__wrapper}>
            <input
                placeholder='Вы можете найти аниме'
                className={styles.search}
            />
        </div>
    );
};

export default Search;
