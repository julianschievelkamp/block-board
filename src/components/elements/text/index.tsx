import React from "react";

import { StyledText } from "./styles";

export interface TextProps {
    children?: React.ReactNode;
    textAlign?: "left" | "center" | "right";
    bold?: boolean;
    margin?: string;
    fontSize?: string;
    color?: string;
    className?: string;
    id?: string;
}

const Text = ({
    children,
    textAlign,
    bold,
    margin = "0",
    fontSize = "1rem",
    color,
    className,
    id,
}: TextProps) => {
    return (
        <StyledText
            textAlign={textAlign}
            bold={bold}
            margin={margin}
            fontSize={fontSize}
            color={color}
            className={className}
            id={id}
        >
            {children}
        </StyledText>
    );
};

export default Text;
