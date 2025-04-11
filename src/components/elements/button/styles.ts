import styled, { css } from "styled-components";

import { shadow, borderRadius, transition, queries } from "styles/variables";
import { icons } from "../icon/icons";
import { Theme } from "data/types";

export const StyledButton = styled.button<{
    $iconName?: keyof typeof icons;
    theme: Theme;
}>`
    background: ${({ theme }) => theme.secondary};
    color: ${({ theme }) => theme.text};
    border: 1px solid ${({ theme }) => theme.border};
    transition: ${transition.fast};
    border-radius: ${borderRadius.edged};
    padding: 0.5rem;
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
    opacity: ${({ disabled }) => (disabled ? "0.5" : "1")};
    overflow: hidden;
    outline: none;
    display: flex;
    align-items: center;

    ${({ disabled }) =>
        !disabled &&
        css`
            @media ${queries.hover} {
                &:hover {
                    transform: translateY(-3px);
                    box-shadow: ${shadow.soft};
                }
            }
        `}
`;
