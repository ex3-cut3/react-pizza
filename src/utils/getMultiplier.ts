import {PRICE_MULTIPLIERS} from "./constants";

export function getMultiplier(size: number) {
    let overallMultiplier = 1;
    switch (size) {
        case 26:
            overallMultiplier *= PRICE_MULTIPLIERS.SMALL_SIZE;
            break;
        case 30:
            overallMultiplier *= PRICE_MULTIPLIERS.MEDIUM_SIZE;
            break;
        case 40:
            overallMultiplier *= PRICE_MULTIPLIERS.BIG_SIZE;
            break;
        default:
            overallMultiplier *= 1
    }
    return overallMultiplier;
}
