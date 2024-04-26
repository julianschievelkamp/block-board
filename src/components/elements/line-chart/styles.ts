import styled from "styled-components";
import Div from "../div";
import { transition } from "styles/variables";

export const Container = styled(Div)<{ opacity: number }>`
    opacity: ${({ opacity }) => opacity};
    transition: ${transition.fast};
`;

export const Canvas = styled.canvas`
    max-width: 128px;
`;
