import { Theme } from "data/types";
import styled from "styled-components";
import { borderRadius, queries, transition } from "styles/variables";

export const Grid = styled.div`
    display: grid;
    grid-auto-rows: 1fr;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;

    @media ${queries.sm} {
        grid-template-columns: 1fr 1fr 1fr;
    }
`;

export const Select = styled.div<{ opacity: number; theme: Theme }>`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${borderRadius.edged};
    background-color: ${({ theme }) => theme.secondary};
    padding: 1rem;
    border: 1px solid ${({ color, theme }) => color ?? theme.border};
    transition: ${transition.fast};
    cursor: pointer;
    opacity: ${({ opacity }) => opacity};

    @media ${queries.hover} {
        &:hover {
            opacity: 1;
        }
    }
`;
