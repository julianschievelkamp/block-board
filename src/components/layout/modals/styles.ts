import styled from "styled-components";
import { borderRadius, queries, shadow, transition } from "styles/variables";

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1rem;
`;

export const Select = styled.div`
    border-radius: ${borderRadius.edged};
    padding: 1rem;
    border: 2px solid ${({ color, theme }) => color ?? theme.border};
    transition: ${transition.fast};
    cursor: pointer;

    @media ${queries.hover} {
        &:hover {
            transform: translateY(-3px);
            box-shadow: ${shadow.soft};
        }
    }
`;
