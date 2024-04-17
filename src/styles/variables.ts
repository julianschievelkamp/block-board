import { css } from "styled-components";
import { Theme } from "types";

export const lightTheme: Theme = {
    primary: "#FFFFFF",
    secondary: "#FFFFFF",
    body: "#fafafa",
    menu: "#FFFFFF",
    text: "#363537",
    icon: "#000000",
    border: "#e5e5e5",
    hover: "#fafafa",
    inputScheme: "light",
};

export const darkTheme: Theme = {
    primary: "#181818",
    secondary: "#121212",
    body: "#000000",
    menu: "#000000",
    text: "#FAFAFA",
    icon: "#FFFFFF",
    border: "#2d2d2d",
    hover: "#1d1d1d",
    inputScheme: "dark",
};

export const queries = {
    xs: `screen and (min-width: 350px)`,
    sm: `screen and (min-width: 576px)`,
    md: `screen and (min-width: 768px)`,
    lg: `screen and (min-width: 992px)`,
    xl: `screen and (min-width: 1200px)`,
    xxl: `screen and (min-width: 1400px)`,
    hover: `(hover: hover)`,
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
    soft: "0 0 8px 0 rgba(0, 0, 0, 0.1)",
    hard: "2px 2px 3px 0 rgba(0, 0, 0, 0.2)",
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
