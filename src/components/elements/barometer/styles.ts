import styled, { keyframes } from "styled-components";

const timer = keyframes`
    0% { stroke-dasharray: 0, 100 }
    100% { stroke-dasharray: 47, 100 }
`;

export const StyledSvg = styled.svg<{
    $size: string;
}>`
    width: ${({ $size }) => $size};
    height: ${({ $size }) => $size};
    transform: rotate(-90deg);

    path {
        /* animation-name: ${timer}; */
        animation-duration: 500ms;
        animation-timing-function: linear;
        animation-fill-mode: forwards;
    }
`;
