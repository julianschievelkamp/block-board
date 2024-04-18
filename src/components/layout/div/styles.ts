import styled from "styled-components";

export const StyledDiv = styled.div<{
    width?: string;
    height?: string;
    $position?: string;
    $display?: string;
    $flexDirection?: string;
    $justifyContent?: string;
    $flexWrap?: string;
    $alignItems?: string;
    $margin?: string;
    $padding?: string;
    $top?: string;
    $left?: string;
    $right?: string;
    $bottom?: string;
}>`
    position: ${({ $position }) => $position ?? "relative"};
    display: ${({ $display }) => $display};
    flex-direction: ${({ $flexDirection }) => $flexDirection};
    justify-content: ${({ $justifyContent }) => $justifyContent};
    flex-wrap: ${({ $flexWrap }) => $flexWrap};
    align-items: ${({ $alignItems }) => $alignItems};
    margin: ${({ $margin }) => $margin};
    padding: ${({ $padding }) => $padding};
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    top: ${({ $top }) => $top};
    left: ${({ $left }) => $left};
    right: ${({ $right }) => $right};
    bottom: ${({ $bottom }) => $bottom};
    max-width: 100%;
`;
