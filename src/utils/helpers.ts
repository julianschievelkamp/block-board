export const formatPrice = (value: number, currency: string): string => {
    return new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: currency,
    }).format(value);
};

export const formatChange = (value: number): string => {
    return new Intl.NumberFormat("de-DE", {
        style: "decimal",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(value);
};

export const getRandomInteger = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const clampNumber = (num: number, min: number, max: number): number =>
    Math.min(Math.max(num, min), max);

export const getMinValue = (values: number[]): number => {
    return Math.min(...values.map((value) => value));
};
export const getMaxValue = (values: number[]): number => {
    return Math.max(...values.map((value) => value));
};
