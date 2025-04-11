import { Theme } from "data/types";
import styled from "styled-components";
import { queries, scrollStyles, transition } from "styles/variables";

export const StyledMenu = styled.div<{ theme: Theme }>`
    border-top: ${({ theme }) => `1px solid ${theme.border}`};
    background: ${({ theme }) => theme.menu};
    transition: ${transition.fast};
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 99;
    height: 5.75rem;

    @media ${queries.xs} {
        justify-content: space-between;
    }

    @media ${queries.lg} {
        border-top: none;
        border-right: ${({ theme }) => `1px solid ${theme.border}`};
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        border-bottom: 0px;
        width: 18rem;
        height: 100%;
        padding: 2rem;

        ${scrollStyles}
    }
`;

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;

    @media ${queries.lg} {
        width: 100%;
    }
`;

export const ButtonContainer = styled.div`
    display: flex;

    @media ${queries.lg} {
        flex-direction: column;
        width: 100%;
    }

    button {
        margin-left: 1rem;

        @media ${queries.lg} {
            margin: 0.5rem 0;
        }
    }
`;
