import styled from "styled-components";
import { transition } from "styles/variables";

export const StyledSVG = styled.svg<{ $size: string }>`
    width: ${({ $size }) => $size};
    height: ${({ $size }) => $size};
    transition: ${transition.fast};
    opacity: 0.5;
`;

export const Ring = styled.path`
    transition: ${transition.fast};
`;
