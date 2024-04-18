import styled, { css } from "styled-components";

import { transition } from "styles/variables";
import { IconProps } from ".";

export const StyledIcon = styled.div<
    Pick<IconProps, "size" | "margin" | "onClick">
>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${({ size }) => size};
    height: ${({ size }) => size};
    margin: ${({ margin }) => margin};
    max-width: 100%;
    max-height: 100%;

    svg {
        transition: ${transition.fast};
        fill: ${({ color }) => color};
        width: ${({ size }) => size};
        height: ${({ size }) => size};
    }

    ${({ onClick }) =>
        onClick &&
        css`
            cursor: pointer;
        `}
`;
