import React from "react";

import { StyledDiv } from "./styles";

export interface DivProps {
    children?: React.ReactNode;
    position?: string;
    display?: string;
    flexDirection?: string;
    justifyContent?: string;
    flexWrap?: string;
    alignItems?: string;
    margin?: string;
    padding?: string;
    width?: string;
    height?: string;
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
    onClick?: () => void;
    className?: string;
}

const Div = ({ children, ...rest }: DivProps) => {
    return <StyledDiv {...rest}>{children}</StyledDiv>;
};

export default Div;
