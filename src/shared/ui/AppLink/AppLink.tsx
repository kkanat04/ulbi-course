import { cls } from 'shared/lib/cls/cls';
import { FC, ReactNode } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import styles from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
    className?: string
    theme?: AppLinkTheme
    children?: ReactNode
}

const AppLink: FC<AppLinkProps> = (props) => {
    const {
        className, children, to, theme = AppLinkTheme.PRIMARY, ...otherProps
    } = props;
    return (
        <Link
            {...otherProps}
            to={to}
            className={cls(styles.AppLink, {}, [className, styles[theme]])}
        >
            {children}
        </Link>
    );
};

export default AppLink;
