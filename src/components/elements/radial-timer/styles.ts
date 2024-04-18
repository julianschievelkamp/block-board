import styled, { keyframes } from "styled-components";
import { transition } from "styles/variables";

const timer = keyframes`
    0% { stroke-dasharray: 100, 100 }
    100% { stroke-dasharray: 0, 100 }
`;

export const StyledSVG = styled.svg<{ $size: string; $duration: number }>`
    width: ${({ $size }) => $size};
    height: ${({ $size }) => $size};
    transition: ${transition.fast};
    opacity: 0.5;

    path[data-animation="1"] {
        animation-name: ${timer};
        animation-duration: ${({ $duration }) => `${$duration - 50}ms`};
        animation-timing-function: linear;
        animation-fill-mode: forwards;
    }
`;

export const Ring = styled.path`
    transition: ${transition.fast};
    stroke-dasharray: 100, 100;
    stroke-width: 2;
`;
