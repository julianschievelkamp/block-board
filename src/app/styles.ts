import styled from "styled-components";
import { queries, transition } from "styles/variables";

export const StyledApp = styled.div`
    width: 100vw;
    min-height: var(--real100vh);
    background: ${({ theme }) => theme.body};
    transition: ${transition.fast};
    overflow: hidden;
`;

export const Dashboard = styled.div`
    display: grid;
    grid-auto-rows: 1fr;
    grid-gap: 1rem;
    padding: 1rem;
    padding-bottom: 6.75rem;

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
