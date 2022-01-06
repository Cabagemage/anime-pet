import { FC } from 'react';
import styles from './animeList.module.css';
import Image from 'next/image';
import { IAnimeListProps } from '../../../pages';
import Link from 'next/link';

const AnimeList: FC<IAnimeListProps> = ({ animes, title, type }) => {
    return (
        <section>
            <h1 className={styles.title}>{title}</h1>
            <ul className={styles.list}>
                {animes.map((item, idx) => {
                    return (
                        <Link key={idx} href={`/anime/${item.id}`}>
                            <li className={styles.card}>
                                <article className={styles.article}>
                                    <div className={styles.imageWrapper}>
                                        <Image
                                            src={item.coverImage.large}
                                            layout='fill'
                                            objectFit='cover'
                                        />
                                    </div>
                                    <div className={styles.about}>
                                        <h2 className={styles.card__title}>
                                            {item.title.romaji}
                                        </h2>
                                        <p className={styles.truncate_text}>
                                            {item.description}
                                        </p>
                                        <ul className={styles.genres}>
                                            {item.genres.map((genre) => {
                                                return (
                                                    <li
                                                        className={
                                                            styles.genre
                                                        }>
                                                        <p>{genre}</p>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                        <span>
                                            Рейтинг аниме: {item.averageScore}{' '}
                                        </span>
                                    </div>
                                </article>
                            </li>
                        </Link>
                    );
                })}
            </ul>
        </section>
    );
};

export default AnimeList;
