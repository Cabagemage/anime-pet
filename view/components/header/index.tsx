import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../public/icons/logo.png';
import styles from './header.module.css';
import { routes } from './header.data';
import Search from '../search';
import { FC } from 'react';

const Header: FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Image alt='logo' src={logo} objectFit={'contain'} />
            </div>
            <nav className={styles.navigation}>
                <ul className={styles.nav__list}>
                    {routes.map((route, idx) => {
                        return (
                            <li key={idx} className={styles.nav__item}>
                                <Link href={route.href}>{route.path}</Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
            <Search />
        </header>
    );
};

export default Header;
