import { createGlobalStyle } from "styled-components";
import { queries, scrollStyles } from "./variables";
import { Theme } from "data/types";
import fonts from "./fonts";

export default createGlobalStyle<{ theme?: Theme }>`
    ${fonts}

    :root {
        --100vh: 100vh;
    }

    @supports (height: 100svh) {
        :root {
            --100vh: 100svh;
        }
    }  

    * {
        box-sizing: border-box;
        font-family: "Poppins", sans-serif;
        -webkit-tap-highlight-color: transparent;
    }

    html, body {
        margin: 0;
        padding: 0;
        font-size: 100%;
        width: 100vw;
        height: var(--100vh);
        overflow: hidden;
        background: ${({ theme }) => theme.body};

        @media ${queries.xl} {
            font-size: 125%;
        }
    }

    body {
        ${scrollStyles};
    }

    .no-transition * {
        transition: none !important;
    }

    .no-scroll {
        overflow: hidden !important;
    }
`;

let resizeTimer: ReturnType<typeof setTimeout>;

window.addEventListener("resize", () => {
    document.body.classList.add("no-transition");

    clearTimeout(resizeTimer);

    resizeTimer = setTimeout(() => {
        document.body.classList.remove("no-transition");
    }, 400);
});
