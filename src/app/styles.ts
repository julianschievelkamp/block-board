import styled from "styled-components";
import { queries, transition } from "styles/variables";

export const StyledApp = styled.div`
    width: 100vw;
    min-height: 100vh;
    background: ${({ theme }) => theme.body};
    transition: ${transition.fast};
    overflow: hidden;
`;

export const Dashboard = styled.div`
    display: grid;
    grid-auto-rows: 1fr;
    padding: 0.5rem;

    @media ${queries.md} {
        grid-template-columns: 1fr 1fr;
    }

    @media ${queries.lg} {
        padding: 1rem;
        padding-left: 19rem;
    }

    @media ${queries.xxl} {
        grid-template-columns: 1fr 1fr 1fr;
    }
`;
