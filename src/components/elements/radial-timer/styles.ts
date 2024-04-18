import styled, { keyframes } from "styled-components";
import { transition } from "styles/variables";

const timer = keyframes`
    0% { stroke-dasharray: 100, 100 }
    100% { stroke-dasharray: 0, 100 }
`;

export const StyledSVG = styled.svg<{ $size: string; $ms: number }>`
    width: ${({ $size }) => $size};
    height: ${({ $size }) => $size};
    transition: ${transition.fast};
    opacity: 0.5;

    path[animation="1"] {
        animation-name: ${timer};
        animation-duration: ${({ $ms }) => `${$ms - 50}ms`};
        animation-timing-function: linear;
    }
`;

export const Ring = styled.path<{ animation: number }>`
    transition: ${transition.fast};
    stroke-dasharray: 100, 100;
    stroke-width: 2;
`;
