import { css } from "styled-components";

import PoppinsLight from "assets/fonts/Poppins-Light.ttf";
import PoppinsBold from "assets/fonts/Poppins-Bold.ttf";

export default css`
    @font-face {
        font-family: "Poppins";
        font-style: normal;
        src: url(${PoppinsLight}) format("truetype");
    }

    @font-face {
        font-family: "Poppins";
        font-style: normal;
        font-weight: bold;
        src: url(${PoppinsBold}) format("truetype");
    }
`;
