import { createGlobalStyle } from "styled-components";

import fonts from "./fonts";

export default createGlobalStyle`
    ${fonts};

    * {
        box-sizing: border-box;
        -webkit-tap-highlight-color: transparent;
    }

    html, body {
        margin: 0;
        padding: 0;
        font-size: 100%;
        min-height: 100svh;
        position: relative;
        overflow-x: clip;
    }

    html {
        text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        scrollbar-gutter: stable;
        overflow-y: auto;
    }

    body {
        background-color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    :focus-visible {
        outline: none;
    }
`;
