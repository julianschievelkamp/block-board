import { css } from "styled-components";

import PoppinsLight from "assets/fonts/Poppins-Light.woff2";
import PoppinsBold from "assets/fonts/Poppins-Bold.woff2";

export default css`
    @font-face {
        font-family: "Poppins";
        font-style: normal;
        src: url(${PoppinsLight}) format("woff2");
    }

    @font-face {
        font-family: "Poppins";
        font-style: normal;
        font-weight: bold;
        src: url(${PoppinsBold}) format("woff2");
    }
`;
