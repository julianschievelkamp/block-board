import styled, { keyframes } from "styled-components";

const timer = keyframes`
    0% { stroke-dasharray: 100, 100 }
    100% { stroke-dasharray: 0, 100 }
`;

export const StyledSvg = styled.svg<{ $size: string; $duration: number }>`
    width: ${({ $size }) => $size};
    height: ${({ $size }) => $size};

    path[data-animation="1"] {
        animation-name: ${timer};
        animation-duration: ${({ $duration }) => `${$duration - 50}ms`};
        animation-timing-function: linear;
        animation-fill-mode: forwards;
    }
`;

export const Ring = styled.path`
    stroke-dasharray: 100, 100;
    stroke-width: 1;
`;
