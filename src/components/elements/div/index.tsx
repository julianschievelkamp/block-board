import React from "react";

import { StyledDiv } from "./styles";

export interface DivProps {
    children?: React.ReactNode;
    width?: string;
    maxWidth?: string;
    height?: string;
    onClick?: () => void;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
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
    opacity?: number;
}

const Div = ({
    children,
    width,
    maxWidth,
    height,
    onClick,
    onMouseEnter,
    onMouseLeave,
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
    opacity,
}: DivProps) => {
    return (
        <StyledDiv
            width={width}
            height={height}
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className={className}
            $maxWidth={maxWidth}
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
            $opacity={opacity}
        >
            {children}
        </StyledDiv>
    );
};

export default Div;
