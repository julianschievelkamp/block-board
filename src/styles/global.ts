import { createGlobalStyle } from "styled-components";
import { queries, scrollStyles } from "./variables";

export default createGlobalStyle`
    * {
        box-sizing: border-box;
        font-family: "Segoe UI", Arial, sans-serif;
        -webkit-tap-highlight-color: transparent;
    }

    :root {
        --real100vh: 100vh;
    }

    html, body {
        margin: 0;
        padding: 0;
        font-size: 100%;
        width: 100vw;
        height: var(--real100vh);
        overflow: hidden;

        @media ${queries.xl} {
            font-size: 125%;
        }

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
        // if landscape, switch vh with vw
        if (
            window.innerWidth > window.innerHeight &&
            window.innerWidth < 1024
        ) {
            value = `${window.innerWidth}px`;
        } else {
            value = `${window.innerHeight}px`;
        }
    }

    document.documentElement.style.setProperty("--real100vh", value);
};

set100vh();

let resizeTimer: ReturnType<typeof setTimeout>;

window.addEventListener("resize", () => {
    document.body.classList.add("no-transition");

    clearTimeout(resizeTimer);

    resizeTimer = setTimeout(() => {
        document.body.classList.remove("no-transition");
    }, 400);
});
