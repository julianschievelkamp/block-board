import styled, { css } from "styled-components";

import { shadow, borderRadius, transition, queries } from "styles/variables";

import { ButtonProps } from ".";

export const StyledButton = styled.button<
    Pick<ButtonProps, "iconName" | "iconPosition" | "disabled">
>`
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
    flex-flow: ${({ iconName, iconPosition }) =>
        iconName && iconPosition === "right" ? "row-reverse" : "row"};
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
