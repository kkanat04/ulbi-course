import { cls } from 'shared/lib/cls/cls';
import styles from './PageLoader.module.scss';
import Loader from 'shared/ui/Loader/Loader';

interface PageLoaderProps {
    className?: string
}

const PageLoader = ({ className }: PageLoaderProps) => (
    <div className={cls(styles.PageLoader, {}, [className])}>
        <Loader />
    </div>
);

export default PageLoader;
