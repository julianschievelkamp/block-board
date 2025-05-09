import { Theme } from "data/types";
import styled, { css } from "styled-components";

import { transition } from "styles/variables";

export const StyledIcon = styled.div<{
    $size?: string;
    $margin?: string;
    $themeColor?: keyof Theme;
    onClick?: () => void | undefined;
    theme: Theme;
}>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${({ $size }) => $size};
    height: ${({ $size }) => $size};
    margin: ${({ $margin }) => $margin};
    max-width: 100%;
    max-height: 100%;

    svg {
        transition: ${transition.fast};
        fill: ${({ theme, color }) => color ?? theme.icon};
        width: ${({ $size }) => $size};
        height: ${({ $size }) => $size};
    }

    ${({ onClick }) =>
        onClick &&
        css`
            cursor: pointer;
        `}
`;
