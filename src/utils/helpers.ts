export const formatPrice = (value: number, currency: string): string => {
    return new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: currency,
    }).format(value);
};

export const clampNumber = (num: number, min: number, max: number): number =>
    Math.min(Math.max(num, min), max);

export const getMinValue = (values: number[]): number => {
    return Math.min(...values.map((value) => value));
};
export const getMaxValue = (values: number[]): number => {
    return Math.max(...values.map((value) => value));
};
