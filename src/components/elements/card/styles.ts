import styled from "styled-components";
import { borderRadius, shadow, transition } from "styles/variables";

export const StyledCard = styled.div<{ $bgColor: string }>`
    position: relative;
    border-radius: ${borderRadius.edged};
    border: 1px solid ${({ $bgColor }) => $bgColor};
    background-color: ${({ $bgColor }) => $bgColor};
    transition: ${transition.fast};
    box-shadow: ${shadow.hard};
    padding: 1rem;
    margin: 0.5rem;

    &:hover {
        transform: translateY(-3px);
        box-shadow: ${shadow.soft};
    }
`;
