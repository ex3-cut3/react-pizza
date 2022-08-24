import {useMemo} from "react";

export const useFilter = (items: any[], filterStr: string) => {
    return useMemo(() => items.filter((item) => item.toLowerCase().includes(filterStr.toLowerCase())), [filterStr, items])
};
