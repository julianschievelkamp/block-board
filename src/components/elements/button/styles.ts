import styled, { css } from "styled-components";

import { shadow, borderRadius, transition, queries } from "styles/variables";
import { icons } from "../icon/icons";

export const StyledButton = styled.button<{
    $iconName?: keyof typeof icons;
}>`
    background: ${({ theme }) => theme.secondary};
    color: ${({ theme }) => theme.text};
    border: 1px solid ${({ theme }) => theme.border};
    transition: ${transition.fast};
    border-radius: ${borderRadius.edged};
    padding: 0.5rem 1rem;
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
