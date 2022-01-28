import { FC } from 'react';
import { IFullAnimeProps } from '../../../pages/anime/[id]';
import styles from './fullAnime.module.css';
import Image from 'next/image';
import Genres from '../genres';
import { getFormattedDate } from '../../../controllers/getFormattedDate';

const FullAnime: FC<IFullAnimeProps> = ({ anime }) => {
    return (
        <>
            {anime.bannerImage && (
                <section className={styles.cover}>
                    <Image
                        src={anime.bannerImage}
                        placeholder={'blur'}
                        blurDataURL={anime.bannerImage}
                        objectFit='cover'
                        layout='fill'
                    />
                </section>
            )}

            <section className={styles.root}>
                <div className={styles.header}>
                    <div className={styles.headImage}>
                        <Image
                            src={anime.coverImage.extraLarge}
                            placeholder={'blur'}
                            blurDataURL={anime.coverImage.extraLarge}
                            objectFit='cover'
                            layout='fill'
                        />
                    </div>
                    <div className={styles.header__info}>
                        <h1 className={styles.title}>{anime.title.romaji}</h1>
                        <Genres genres={anime.genres} />
                        <p>status: {anime.status}</p>
                        <p>start: {getFormattedDate(anime.startDate)}</p>
                        <p>
                            end:{' '}
                            {anime.endDate
                                ? getFormattedDate(anime.endDate)
                                : 'in progress...'}
                        </p>
                    </div>
                </div>
                <div className={styles.main}>
                    <p>{anime.description}</p>
                </div>
            </section>
        </>
    );
};

export default FullAnime;
