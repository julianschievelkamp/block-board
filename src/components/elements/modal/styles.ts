import styled from "styled-components";
import { borderRadius, queries, shadow, transition } from "styles/variables";

import Icon from "components/elements/icon";

export const ModalContainer = styled.div<{ $isOpen: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    transition: ${transition.fast};
    opacity: ${({ $isOpen }) => ($isOpen ? "1" : "0")};
    visibility: ${({ $isOpen }) => ($isOpen ? "visible" : "hidden")};
    z-index: 9;
    pointer-events: none;
    margin-top: 2.875rem;

    @media ${queries.lg} {
        margin-left: 9rem;
        margin-top: 0;
    }
`;

export const Window = styled.div<{ $isOpen: boolean }>`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: ${borderRadius.edged};
    padding: 1rem;
    width: calc(100% - 2rem);
    max-width: 500px;
    background: ${({ theme }) => theme.primary};
    border: 1px solid ${({ theme }) => theme.border};
    transition: ${transition.fast};
    box-shadow: ${shadow.soft};
    pointer-events: ${({ $isOpen }) => ($isOpen ? "all" : "none")};
`;

export const StyledIcon = styled(Icon)`
    position: absolute;
    right: 1rem;
    top: 1rem;
`;
