import styled from "styled-components";
import { borderRadius, queries, shadow, transition } from "styles/variables";

export const StyledWidget = styled.div<{
    $bgColor: string;
    $isLoading: boolean;
}>`
    position: relative;
    opacity: ${({ $isLoading }) => ($isLoading ? 0 : 1)};
    border-radius: ${borderRadius.edged};
    border: 1px solid ${({ $bgColor }) => $bgColor};
    background-color: ${({ $bgColor }) => $bgColor};
    transition: ${transition.fast};
    padding: 1rem;
    margin: 0.5rem;

    @media ${queries.hover} {
        &:hover {
            transform: translateY(-3px);
            box-shadow: ${shadow.soft};
        }
    }
`;
