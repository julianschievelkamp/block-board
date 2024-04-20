import styled from "styled-components";
import { queries, transition } from "styles/variables";

export const StyledApp = styled.div`
    width: 100vw;
    min-height: 100vh;
    background: ${({ theme }) => theme.body};
    transition: ${transition.fast};
    overflow: hidden;

    @media ${queries.xxl} {
        height: 100vh;
    }
`;

export const Dashboard = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 0.5rem;
    padding-top: 6.25rem;

    @media ${queries.lg} {
        flex-direction: row;
        align-items: flex-start;
        padding: 1rem;
        padding-top: 1rem;
        padding-left: 19rem;
    }
`;
