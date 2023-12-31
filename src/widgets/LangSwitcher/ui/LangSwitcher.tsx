import { cls } from 'shared/lib/cls/cls';
import { useTranslation } from 'react-i18next';
import Button, { ThemeButton } from 'shared/ui/Button/Button';

interface LangSwitcherProps {
    className?: string
}

const LangSwitcher = ({ className }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const changeLang = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            className={cls('', {}, [className])}
            onClick={changeLang}
            theme={ThemeButton.CLEAR}
        >
            {t('Язык')}
        </Button>
    );
};

export default LangSwitcher;
