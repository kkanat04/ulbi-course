import { cls } from 'shared/lib/cls/cls';
import { useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import styles from './Sidebar.module.scss';

interface SidebarProps {
    className?: string
}

const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed(!collapsed);
    };

    return (
        <div
            className={cls(styles.Sidebar, { [styles.collapsed]: collapsed }, [className])}
        >
            <button type="button" onClick={onToggle}>toggle</button>
            <div className={styles.switchers}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    );
};

export default Sidebar;
