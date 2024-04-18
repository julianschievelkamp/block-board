import styled, { keyframes } from "styled-components";

const priceColors = ["red", "white", "green"];

const signalColor = keyframes`
    0% { color: green }
    100% { color: white }
`;

export const StyledPrice = styled.div<{ color: string }>`
    div[data-animation="1"] {
        animation-name: ${signalColor};
        animation-duration: 1s;
        animation-fill-mode: forwards;
    }
`;

export const TextContainer = styled.div`
    color: white;
`;
