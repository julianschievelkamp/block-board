import React from "react";

import { StyledText } from "./styles";

export interface TextProps {
    children?: React.ReactNode;
    bold?: boolean;
    className?: string;
    color?: string;
    textAlign?: "left" | "center" | "right";
    margin?: string;
    fontSize?: string;
    lineHeight?: string;
}

const Text = ({
    children,
    bold,
    className,
    color,
    textAlign,
    margin = "0",
    fontSize = "1rem",
    lineHeight = "1",
}: TextProps) => {
    return (
        <StyledText
            bold={bold}
            className={className}
            color={color}
            $textAlign={textAlign}
            $margin={margin}
            $fontSize={fontSize}
            $lineHeight={lineHeight}
        >
            {children}
        </StyledText>
    );
};

export default Text;
