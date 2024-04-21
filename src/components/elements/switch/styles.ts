import styled from "styled-components";
import { borderRadius, transition } from "styles/variables";

export const StyledSwitch = styled.div<{ disabled: boolean }>`
    position: relative;
    display: flex;
    align-items: center;
    border-radius: ${borderRadius.round};
    border: 1px solid ${({ color }) => color};
    height: 1.25rem;
    opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
    transition: ${transition.fast};
`;

export const Option = styled.div`
    z-index: 1;
    padding: 0 0.5rem;
`;

export const Indicator = styled.div<{ $offset: number; width: number }>`
    position: absolute;
    background-color: ${({ color }) => color};
    left: ${({ $offset }) => `${$offset}%`};
    width: ${({ width }) => `${width}%`};
    height: 100%;
    border-radius: ${borderRadius.round};
    transition: ${transition.fast};
`;
