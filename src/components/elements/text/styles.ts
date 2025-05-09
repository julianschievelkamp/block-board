import { Theme } from "data/types";
import styled from "styled-components";
import { transition } from "styles/variables";

export const StyledText = styled.p<{
    color?: string;
    $bold?: boolean;
    $textAlign?: "left" | "center" | "right";
    $margin?: string;
    $fontSize?: string;
    $lineHeight?: string;
    theme: Theme;
}>`
    text-align: ${({ $textAlign }) => $textAlign};
    font-weight: ${({ $bold }) => ($bold ? "bold" : "normal")};
    font-size: ${({ $fontSize }) => $fontSize};
    margin: ${({ $margin }) => $margin};
    color: ${({ color, theme }) => color ?? theme.text};
    line-height: ${({ $lineHeight }) => $lineHeight};
    transition: ${transition.fast};
`;
