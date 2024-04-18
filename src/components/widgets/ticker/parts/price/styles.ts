import styled, { keyframes } from "styled-components";

const signalColor = (color: string) => keyframes`
    0% { color: ${color} }
    100% { color: white }
`;

export const StyledPrice = styled.div<{ color: string }>`
    div[data-animation="1"] {
        animation-name: ${({ color }) => signalColor(color)};
        animation-duration: 1s;
        animation-fill-mode: forwards;
    }
`;

export const TextContainer = styled.div`
    color: white;
`;
