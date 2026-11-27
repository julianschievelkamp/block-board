import { styled } from "styled-components";

import { transition } from "styles/variables";

export const StyledText = styled.p`
    margin: 0;
    color: black;
    font-size: 0.875rem;
    line-height: 1.5;
    transition: color ${transition.default};
    font-family: "Poppins", sans-serif;
`;
