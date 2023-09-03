import { cls } from 'shared/lib/cls/cls';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import styles from './Navbar.module.scss';

interface NavbarProps {
    className?: string
}

const Navbar = ({ className }: NavbarProps) => (
    <div className={cls(styles.Navbar, {}, [className])}>
        <div className={styles.links}>
            <AppLink theme={AppLinkTheme.SECONDARY} to="/">Главная</AppLink>
            <AppLink theme={AppLinkTheme.SECONDARY} to="/about">О сайте</AppLink>
        </div>
    </div>
);

export default Navbar;
