import { FC } from 'react';
import { getBackgroundColorByRating } from '../../../controllers/getBackgroundColor';
import styles from './rating.module.css';

const Rating: FC<{ rating: number }> = ({ rating }) => {
    return (
        <div
            className={styles.wrapper}
            style={getBackgroundColorByRating(rating)}>
            <p>{rating}</p>
        </div>
    );
};

export default Rating;
