import styled, { keyframes } from "styled-components";

import Icon from "components/elements/icon";

const timer = keyframes`
    0% { stroke-dasharray: 100, 100 }
    100% { stroke-dasharray: 0, 100 }
`;

export const StyledSvg = styled.svg<{
    $size: string;
    $duration: number;
    $animationDelay: number;
}>`
    width: ${({ $size }) => $size};
    height: ${({ $size }) => $size};

    path[data-animation="1"] {
        animation-name: ${timer};
        animation-duration: ${({ $duration, $animationDelay }) =>
            `${$duration - $animationDelay}ms`};
        animation-timing-function: linear;
        animation-fill-mode: forwards;
    }
`;

export const StyledIcon = styled(Icon)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0.5);
`;
