import { Theme } from "data/types";
import styled from "styled-components";
import { transition } from "styles/variables";

export const StyledSvg = styled.svg<{
    $size: string;
}>`
    width: ${({ $size }) => $size};
    height: ${({ $size }) => $size};
    transform: rotate(-90deg);
`;

export const IndicatorBorder = styled.path<{ theme: Theme }>`
    stroke: ${({ theme }) => theme.secondary};
    transition: ${transition.slow}, stroke ${transition.fast};
`;

export const Indicator = styled.path<{ theme: Theme }>`
    stroke: ${({ theme }) => theme.icon};
    transition: ${transition.slow}, stroke ${transition.fast};
`;
