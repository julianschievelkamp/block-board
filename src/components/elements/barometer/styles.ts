import styled from "styled-components";

export const StyledSvg = styled.svg<{
    $size: string;
}>`
    width: ${({ $size }) => $size};
    height: ${({ $size }) => $size};
    transform: rotate(-90deg);
`;
