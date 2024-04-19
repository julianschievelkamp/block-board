import styled from "styled-components";

export const StyledText = styled.p<{
    bold?: boolean;
    color?: string;
    $textAlign?: "left" | "center" | "right";
    $margin?: string;
    $fontSize?: string;
    $lineHeight?: string;
}>`
    text-align: ${({ $textAlign }) => $textAlign};
    font-weight: ${({ bold }) => (bold ? "bold" : "normal")};
    font-size: ${({ $fontSize }) => $fontSize};
    margin: ${({ $margin }) => $margin};
    color: ${({ color, theme }) => color ?? theme.text};
    line-height: ${({ $lineHeight }) => $lineHeight};
`;
