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
        min-height: 100vh;

        @media ${queries.xl} {
            font-size: 125%;
        }

        ${scrollStyles}
    }

    .no-transition * {
        transition: none !important;
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
