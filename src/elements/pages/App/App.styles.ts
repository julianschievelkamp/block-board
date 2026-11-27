import { styled } from "styled-components";

import { queries } from "styles/variables";

export const Main = styled.main`
    max-width: 992px;
    padding: 1rem;

    @media ${queries.md} {
        padding: 2rem;
    }
`;
