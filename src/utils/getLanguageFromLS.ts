import {languages} from "./constants";

export const getLanguageFromLS = () => {
    const defaultLang: string = 'en';
    const langFromLS = localStorage.getItem('i18nextLng') as string;
    return languages.some((language) => language.shortName === langFromLS) ? langFromLS : defaultLang;
}
