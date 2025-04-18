import styled from "styled-components";
import { borderRadius, transition } from "styles/variables";
import Text from "../text";
import { Theme } from "data/types";

export const StyledSwitch = styled.div<{ disabled: boolean; theme: Theme }>`
    position: relative;
    display: flex;
    align-items: center;
    border-radius: ${borderRadius.round};
    border: 1px solid ${({ color, theme }) => color ?? theme.icon};
    height: 1.25rem;
    opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
    transition: ${transition.fast};
`;

export const Option = styled.div`
    z-index: 1;
    padding: 0 0.5rem;
`;

export const StyledText = styled(Text)<{ $isActive: boolean; theme: Theme }>`
    color: ${({ color, theme, $isActive }) =>
        color
            ? $isActive
                ? "white"
                : color
            : $isActive
            ? theme.primary
            : theme.icon};
`;

export const Indicator = styled.div<{
    $offset: number;
    width: number;
    theme: Theme;
}>`
    position: absolute;
    background-color: ${({ color, theme }) => color ?? theme.icon};
    left: ${({ $offset }) => `${$offset}%`};
    width: ${({ width }) => `${width}%`};
    height: 100%;
    border-radius: ${borderRadius.round};
    transition: ${transition.fast};
`;
