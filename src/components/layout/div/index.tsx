import React from "react";

import { StyledDiv } from "./styles";

export interface DivProps {
    children?: React.ReactNode;
    width?: string;
    height?: string;
    onClick?: () => void;
    className?: string;
    position?: string;
    display?: string;
    flexDirection?: string;
    justifyContent?: string;
    flexWrap?: string;
    alignItems?: string;
    margin?: string;
    padding?: string;
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
}

const Div = ({
    children,
    width,
    height,
    onClick,
    className,
    position,
    display,
    flexDirection,
    justifyContent,
    flexWrap,
    alignItems,
    margin,
    padding,
    top,
    left,
    right,
    bottom,
}: DivProps) => {
    return (
        <StyledDiv
            width={width}
            height={height}
            onClick={onClick}
            className={className}
            $position={position}
            $display={display}
            $flexDirection={flexDirection}
            $justifyContent={justifyContent}
            $flexWrap={flexWrap}
            $alignItems={alignItems}
            $margin={margin}
            $padding={padding}
            $top={top}
            $left={left}
            $right={right}
            $bottom={bottom}
        >
            {children}
        </StyledDiv>
    );
};

export default Div;
