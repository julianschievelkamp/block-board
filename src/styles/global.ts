import { createGlobalStyle } from "styled-components";
import { queries, scrollStyles } from "./variables";

export default createGlobalStyle`
    * {
        box-sizing: border-box;
        font-family: "Segoe UI", Arial, sans-serif;
        -webkit-tap-highlight-color: transparent;
    }

    :root {
        --100vh: 100vh;
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

/* see https://stackoverflow.com/questions/58886797/how-to-access-the-real-100vh-on-ios-in-css */
export const set100vh = () => {
    let value = "100vh";

    // if window size is iPad or smaller
    if (window.innerWidth && window.innerWidth <= 1024) {
        value = `${window.innerHeight}px`;
    }

    document.documentElement.style.setProperty("--100vh", value);
};

set100vh();

let resizeTimer: ReturnType<typeof setTimeout>;

window.addEventListener("resize", () => {
    document.body.classList.add("no-transition");

    clearTimeout(resizeTimer);

    resizeTimer = setTimeout(() => {
        document.body.classList.remove("no-transition");

        set100vh();
    }, 400);
});
