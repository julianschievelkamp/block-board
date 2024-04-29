import styled, { keyframes } from "styled-components";
import { queries, transition } from "styles/variables";

const highlightColor = ($signalColor: string, baseColor: string) => keyframes`
    0% { color: ${$signalColor} }
    100% { color: ${baseColor} }
`;

export const Controls = styled.div`
    display: flex;
    align-items: center;

    & > * {
        margin-left: 0.25rem;
    }
`;

export const HoverControls = styled(Controls)<{ $isHover: boolean }>`
    transition: ${transition.fast};
    margin-right: 0.25rem;

    @media ${queries.hover} {
        opacity: ${({ $isHover }) => ($isHover ? 1 : 0)};
    }
`;

export const StyledPrice = styled.div<{ $signalColor: string }>`
    p[data-animation="1"] {
        animation-name: ${({ $signalColor, theme }) =>
            highlightColor($signalColor, theme.text)};
        animation-duration: 1s;
        animation-fill-mode: forwards;
    }
`;
