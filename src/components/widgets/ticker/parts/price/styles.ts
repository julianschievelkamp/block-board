import styled, { keyframes } from "styled-components";

const signalColor = (color: string, baseColor: string) => keyframes`
    0% { color: ${color} }
    100% { color: ${baseColor} }
`;

export const StyledPrice = styled.div<{ color: string }>`
    p[data-animation="1"] {
        animation-name: ${({ color, theme }) => signalColor(color, theme.text)};
        animation-duration: 1s;
        animation-fill-mode: forwards;
    }
`;
