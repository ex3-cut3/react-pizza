import {SortOrderVariants} from "../store/Navigation/NavigationTypes";
import {Language, SortType} from './models';

export const typeNames = ['тонкое', 'традиционное'];
export const skeletonsAmount = 6;
export const msToLeaveNotFoundPage = 3000;

export const sortTypes: SortType[] = [
    {name: 'популярности', sortOrder: SortOrderVariants.ASCENDING, convertedAsItemProperty: 'rating'},
    {name: 'популярности', sortOrder: SortOrderVariants.DESCENDING, convertedAsItemProperty: 'rating'},
    {name: 'алфавиту', sortOrder: SortOrderVariants.ASCENDING, convertedAsItemProperty: 'title'},
    {name: 'алфавиту', sortOrder: SortOrderVariants.DESCENDING, convertedAsItemProperty: 'title'},
    {name: 'цене', sortOrder: SortOrderVariants.ASCENDING, convertedAsItemProperty: 'price'},
    {name: 'цене', sortOrder: SortOrderVariants.DESCENDING, convertedAsItemProperty: 'price'},
];

export const languages: Language[] = [
    {name: 'english', flag: '🇺🇸', shortName: 'en'},
    {name: 'ukrainian', flag: '🇺🇦', shortName: 'ukr'}
]

export enum PRICE_MULTIPLIERS {
    SMALL_SIZE = 1,
    MEDIUM_SIZE = 1.3,
    BIG_SIZE = 1.5,
}

export const debounceTime = 450;
// export const convertedSortTypes: (SortTypes | string)[] = ['rating', '-rating', 'title', '-title', 'price', '-price', ]
export const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
