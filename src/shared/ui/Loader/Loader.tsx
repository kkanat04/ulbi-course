import { cls } from 'shared/lib/cls/cls';
import styles from './Loader.module.scss';

interface LoaderProps {
    className?: string
}

const Loader = ({ className }: LoaderProps) => (
    <div className={cls(styles['lds-ellipsis'], {}, [className])}>
        <div />
        <div />
        <div />
        <div />
    </div>
);

export default Loader;
