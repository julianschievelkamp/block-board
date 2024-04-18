export const clampNumber = (num: number, min: number, max: number): number =>
    Math.min(Math.max(num, min), max);

export const formatPrice = (value: number, currency: string): string => {
    return new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: currency,
    }).format(value);
};

export const formatDate = (value: string): string => {
    return new Date(value).toLocaleDateString();
};
