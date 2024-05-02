import styled from "styled-components";
import { queries, scrollStyles, transition } from "styles/variables";

export const StyledApp = styled.div`
    width: 100vw;
    height: 100vh;
    background: ${({ theme }) => theme.body};
    transition: ${transition.fast};
    overflow: hidden;
`;

export const ScrollContainer = styled.div`
    width: 100%;
    height: 100vh;
    padding-bottom: 5.75rem;

    @media ${queries.lg} {
        padding-bottom: 0;
    }

    ${scrollStyles}
`;

export const Dashboard = styled.div`
    display: grid;
    grid-auto-rows: 1fr;
    grid-gap: 1rem;
    padding: 1rem;

    @media ${queries.md} {
        grid-template-columns: 1fr 1fr;
    }

    @media ${queries.lg} {
        padding: 2rem;
        padding-left: 20rem;
    }

    @media ${queries.xxl} {
        grid-template-columns: 1fr 1fr 1fr;
    }

    @media ${queries.xxxl} {
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
`;
