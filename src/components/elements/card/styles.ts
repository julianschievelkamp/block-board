import styled, { css } from "styled-components";
import { borderRadius, queries, shadow, transition } from "styles/variables";

export const StyledCard = styled.div<{
    $isLoading: boolean;
}>`
    display: inline-block;
    position: relative;
    opacity: ${({ $isLoading }) => ($isLoading ? 0 : 1)};
    border-radius: ${borderRadius.edged};
    border: 1px solid ${({ theme }) => theme.border};
    background-color: ${({ theme }) => theme.secondary};
    transition: ${transition.fast}, opacity ${transition.slow};
    padding: 1rem;
    overflow: hidden;

    ${({ onClick }) =>
        onClick &&
        css`
            cursor: pointer;
        `}

    @media ${queries.hover} {
        &:hover {
            transform: translateY(-3px);
            box-shadow: ${shadow.soft};
        }
    }
`;
