import { createGlobalStyle } from "styled-components";
import { queries, scrollStyles } from "./variables";

export default createGlobalStyle`
    * {
        box-sizing: border-box;
        font-family: "Segoe UI", Arial, sans-serif;
        -webkit-tap-highlight-color: transparent;
    }

    html, body {
        margin: 0;
        padding: 0;
        font-size: 100%;
        width: 100vw;
        height: 100vh;
        overflow: hidden;

        @media ${queries.xl} {
            font-size: 125%;
        }
    }

    .no-transition * {
        transition: none !important;
    }

    .no-scroll .scroll-container {
        overflow-y: hidden !important;
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
