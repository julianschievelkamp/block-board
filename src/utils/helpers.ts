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
        signDisplay: "exceptZero",
    }).format(value);
};

export const calcChange = (values?: number[]): number => {
    return values
        ? ((values[0] - values[values.length - 1]) / values[0]) * 100
        : 0;
};

export const getChangeColor = (value: number): string => {
    let color = "darkgrey";

    if (value > 0) {
        color = "green";
    } else if (value < 0) {
        color = "red";
    }

    return color;
};

export const getRandomInteger = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const clampNumber = (value: number, min: number, max: number): number =>
    Math.min(Math.max(value, min), max);

export const mapNumber = (
    value: number,
    x1: number,
    y1: number,
    x2: number,
    y2: number
) => ((value - x1) * (y2 - x2)) / (y1 - x1) + x2;

export const getMinValue = (values: number[]): number => {
    return Math.min(...values.map((value) => value));
};
export const getMaxValue = (values: number[]): number => {
    return Math.max(...values.map((value) => value));
};
