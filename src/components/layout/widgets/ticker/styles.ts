import { Theme } from "data/types";
import styled, { keyframes } from "styled-components";

const highlightColor = ($signalColor: string, baseColor: string) => keyframes`
    0% { color: ${$signalColor} }
    100% { color: ${baseColor} }
`;

export const StyledPrice = styled.div<{ $signalColor: string; theme: Theme }>`
    p[data-animation="1"] {
        animation-name: ${({ $signalColor, theme }) =>
            highlightColor($signalColor, theme.text)};
        animation-duration: 1s;
        animation-fill-mode: forwards;
    }
`;
