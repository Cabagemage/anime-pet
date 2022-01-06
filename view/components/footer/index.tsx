import { FC } from 'react';
import styles from './footer.module.css';
import { routes } from './footer.data';
import Link from 'next/link';

const Footer: FC = () => {
    return (
        <footer className={styles.footer}>
            <nav className={styles.navigation}>
                <ul className={styles.nav__list}>
                    {routes.map((route) => {
                        return (
                            <li className={styles.nav__item}>
                                <Link href={route.href}>{route.path}</Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </footer>
    );
};
export default Footer;
