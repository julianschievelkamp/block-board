import styled from "styled-components";
import { transition } from "styles/variables";

export const StyledText = styled.p<{
    bold?: boolean;
    color?: string;
    $textAlign?: "left" | "center" | "right";
    $margin?: string;
    $fontSize?: string;
}>`
    text-align: ${({ $textAlign }) => $textAlign};
    font-weight: ${({ bold }) => (bold ? "bold" : "normal")};
    font-size: ${({ $fontSize }) => $fontSize};
    margin: ${({ $margin }) => $margin};
    color: ${({ color }) => color};
    transition: ${transition.fast};
    line-height: 1.5;
`;
