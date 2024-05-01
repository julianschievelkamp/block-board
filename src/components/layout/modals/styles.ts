import styled from "styled-components";
import { borderRadius, queries, shadow, transition } from "styles/variables";

export const Grid = styled.div`
    display: grid;
    grid-auto-rows: 1fr;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;

    @media ${queries.sm} {
        grid-template-columns: 1fr 1fr 1fr;
    }
`;

export const Select = styled.div<{ opacity: number }>`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${borderRadius.edged};
    padding: 1rem;
    border: 2px solid ${({ color, theme }) => color ?? theme.border};
    transition: ${transition.fast};
    cursor: pointer;
    opacity: ${({ opacity }) => opacity};

    @media ${queries.hover} {
        &:hover {
            transform: translateY(-3px);
            box-shadow: ${shadow.soft};
            opacity: 1;
        }
    }
`;
