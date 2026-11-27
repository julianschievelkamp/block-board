const TRANSITION_DEFAULT = 300;

export const transition = {
    default: `${TRANSITION_DEFAULT}ms ease-out`,
    fast: `${TRANSITION_DEFAULT / 3}ms ease-out`,
};

export const colors = {
    secondary: "rgba(0, 0, 0, 0.6)",
};

export const queries = {
    sm: "screen and (min-width: 576px)",
    md: "screen and (min-width: 768px)",
    lg: "screen and (min-width: 992px)",
    xl: "screen and (min-width: 1200px)",
    hover: "(hover: hover)",
};
