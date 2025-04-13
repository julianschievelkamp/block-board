import styled from "styled-components";
import { borderRadius, queries, shadow, transition } from "styles/variables";

import Icon from "components/elements/icon";
import { Theme } from "data/types";

export const ModalContainer = styled.div<{ $isOpen: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    min-height: var(--100vh);
    height: var(--100vh);
    transition: ${transition.fast};
    opacity: ${({ $isOpen }) => ($isOpen ? "1" : "0")};
    visibility: ${({ $isOpen }) => ($isOpen ? "visible" : "hidden")};
    z-index: 9;
    pointer-events: none;
`;

export const Window = styled.div<{ $isOpen: boolean; theme: Theme }>`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: calc(50% - 2.875rem);
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: ${borderRadius.edged};
    padding: 1rem;
    width: calc(100% - 2rem);
    max-width: 600px;
    max-height: calc(var(--100vh) - 5.75rem - 4rem);
    background: ${({ theme }) => theme.primary};
    border: 1px solid ${({ theme }) => theme.border};
    transition: ${transition.fast};
    box-shadow: ${shadow.soft};
    pointer-events: ${({ $isOpen }) => ($isOpen ? "all" : "none")};

    @media ${queries.lg} {
        top: 50%;
        left: calc(50% + 9rem);
        max-height: calc(var(--100vh) - 4rem);
    }
`;

export const ScrollContainer = styled.div`
    overflow-y: scroll;
    width: 100%;
`;

export const StyledIcon = styled(Icon)`
    position: absolute;
    right: 1rem;
    top: 1rem;
`;

export const StyledBackground = styled(ModalContainer)`
    background: rgb(0, 0, 0, 0.25);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    pointer-events: ${({ $isOpen }) => ($isOpen ? "all" : "none")};
`;
