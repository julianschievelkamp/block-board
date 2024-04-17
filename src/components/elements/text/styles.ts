import styled from "styled-components";
import { TextProps } from ".";
import { transition } from "styles/variables";

export const StyledText = styled.p<TextProps>`
    text-align: ${({ textAlign }) => textAlign};
    font-weight: ${({ bold }) => (bold ? "bold" : "normal")};
    font-size: ${({ fontSize }) => fontSize};
    margin: ${({ margin }) => margin};
    color: ${({ color }) => color};
    transition: ${transition.fast};
    line-height: 1.5;
`;
