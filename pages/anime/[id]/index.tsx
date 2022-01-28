import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import styles from '../../../view/styles/Home.module.css';
import Header from '../../../view/components/header';
import Footer from '../../../view/components/footer';
import { handleFullAnimeFetch } from '../../../model/anime';
import { IAnime } from '../../index';
import FullAnime from '../../../view/components/fullAnime';

interface IDate {
    year: number;
    month: number;
    day: number;
}
interface IFullAnime extends IAnime {
    averageScore: number;
    bannerImage: string;
    status: string;
    trailer: null | { id: number; thumbnail: string; site: string };
    endDate: IDate;
    startDate: IDate;
}

export interface IFullAnimeProps {
    anime: IFullAnime;
}

interface IFullAnimePageProps {
    anime: IFullAnime;
}
const Home: NextPage<IFullAnimePageProps> = ({ anime }) => {
    console.log(anime);

    return (
        <div className={styles.container}>
            <Head>
                <title>{anime.title.romaji}</title>
                <meta
                    name=' blue description'
                    content='Generated by create next app'
                />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Header />
            <main className={styles.main}>
                <FullAnime anime={anime} />
            </main>

            <Footer />
        </div>
    );
};
export const getServerSideProps: GetServerSideProps<
    IFullAnimePageProps
> = async (context) => {
    const id = context?.params?.id;

    if (!id) {
        return {
            notFound: true,
        };
    }

    const anime = await handleFullAnimeFetch(Number(id));
    return {
        props: { anime: anime.data.Media },
    };
};
export default Home;
