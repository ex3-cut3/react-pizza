import {memo, useEffect, useRef, useState} from 'react';
import {languages} from "../../utils/constants";
import {useTranslation} from "react-i18next";
import {useActions, useAppSelector} from "../../hooks/useRedux";
import i18n from "../../utils/i18n";

const LanguageSelect = memo(() => {
    const {language: languageFromStore} = useAppSelector(state => state.language);
    const [isPopupOpen, setPopupOpen] = useState(false);
    const {t} = useTranslation();
    const {setLanguage} = useActions();
    const isMounted = useRef(false);

    const onLanguageChanged = (lng: string) => {
        setLanguage(i18n.language);
    }

    useEffect(() => {
        if(!isMounted.current) {
            isMounted.current = true;
        }
        i18n.on('languageChanged', onLanguageChanged);
        return () => {
            i18n.off('languageChanged', onLanguageChanged)
        }
    }, [])

    function changeLocale(selectedLang: string) {
        if (languageFromStore !== selectedLang) {
            i18n.changeLanguage(selectedLang).then(r => r);
        }
    }

    function handleLangClick(index: number) {
        changeLocale(languages[index].shortName);
        setPopupOpen(false);
    }

    return (
        <div style={{position: 'relative', cursor: 'pointer'}}>
            <div className = "sort__label" onClick = {() => setPopupOpen((isOpen) => !isOpen)}>
                <svg
                    width = "10"
                    height = "6"
                    viewBox = "0 0 10 6"
                    fill = "none"
                    xmlns = "http://www.w3.org/2000/svg"
                >
                    <path
                        d = "M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                        fill = "#2C2C2C"
                    />
                </svg>
                <b>{t('language')}</b>
            </div>

            {isPopupOpen &&
                <div className = "sort__popup" style={{width: '165px'}}>
                    <ul>
                        {languages.map((language, index) => {
                            return (
                                <li
                                    key = {index}
                                    className = {`sort-item ${languageFromStore === languages[index].shortName ? 'active' : ''}`}
                                    onClick = {() => handleLangClick(index)}
                                >
                                    {language.name[0].toUpperCase()+language.name.slice(1)} {language.flag}
                                </li>
                            )
                        })}
                    </ul>
                </div>}
        </div>)
});

export default LanguageSelect;
