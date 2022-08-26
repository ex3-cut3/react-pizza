import {Pizza} from "../components/Layout/PizzaBlock/PizzaBlockList";
import {SortVariants} from "../store/Navigation/NavigationTypes";
import {keysOfObj} from "./helpers";

export const typeNames = ['тонкое', 'традиционное'];

export const sortTypes: SortType[] = [
    {name: 'популярности', sortOrder: SortVariants.ASCENDING, convertedAsItemProperty: 'rating'},
    {name: 'популярности', sortOrder: SortVariants.DESCENDING, convertedAsItemProperty: 'rating'},
    {name: 'алфавиту', sortOrder: SortVariants.ASCENDING, convertedAsItemProperty: 'title'},
    {name: 'алфавиту', sortOrder: SortVariants.DESCENDING, convertedAsItemProperty: 'title'},
    {name: 'цене', sortOrder: SortVariants.ASCENDING, convertedAsItemProperty: 'price'},
    {name: 'цене', sortOrder: SortVariants.DESCENDING, convertedAsItemProperty: 'price'},
];

interface Language {
    name: string,
    flag: string,
    shortName: string,
}

export const languages: Language[] = [
    {name: 'english', flag: '🇺🇸', shortName: 'en'},
    {name: 'ukrainian', flag: '🇺🇦', shortName: 'ukr'}
]

export interface SortType {
    name: string,
    sortOrder: SortVariants,
    convertedAsItemProperty: keysOfObj<Pizza>
}

export enum PRICE_MULTIPLIERS {
    SMALL_SIZE = 1,
    MEDIUM_SIZE = 1.3,
    BIG_SIZE = 1.5,
}

export const debounceTime = 450;
// export const convertedSortTypes: (SortTypes | string)[] = ['rating', '-rating', 'title', '-title', 'price', '-price', ]
export const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
