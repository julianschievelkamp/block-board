export const formatPrice = (value: number, currency: string): string => {
    return new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: currency,
    }).format(value);
};
