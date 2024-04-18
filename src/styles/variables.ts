import { css } from "styled-components";

export const queries = {
    xs: "screen and (min-width: 350px)",
    sm: "screen and (min-width: 576px)",
    md: "screen and (min-width: 768px)",
    lg: "screen and (min-width: 992px)",
    xl: "screen and (min-width: 1200px)",
    xxl: "screen and (min-width: 1400px)",
    hover: "(hover: hover)",
};

export const borderRadius = {
    round: "100px",
    edged: "10px",
};

export const transition = {
    fast: "300ms ease-out",
    slow: "800ms ease-in-out",
};

export const shadow = {
    soft: "3px 3px 8px 0 rgba(0, 0, 0, 0.2)",
    hard: "2px 2px 2px 0 rgba(0, 0, 0, 0.2)",
    drop: "2px 2px 3px rgba(0, 0, 0, 0.2)",
};

export const scrollStyles = css`
    overflow-y: scroll;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */

    &::-webkit-scrollbar {
        display: none;
    }
`;
