import Icon from "components/elements/icon";
import styled, { css } from "styled-components";
import { borderRadius, transition } from "styles/variables";

const listEntryStyles = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    border: 1px solid ${({ theme }) => theme.border};
    background-color: ${({ theme }) => theme.secondary};
    border-radius: ${borderRadius.edged};
    transition: ${transition.fast}, opacity 0ms;
    width: 100%;
`;

export const Container = styled.div`
    margin-top: 0.5rem;

    &:first-child {
        margin-top: 0;
    }
`;

export const AlertCard = styled.div<{ $isOpen: boolean }>`
    ${listEntryStyles};

    opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0.5)};
    cursor: pointer;
`;

export const AlertChild = styled.div`
    ${listEntryStyles};
    z-index: 1;
`;

export const HiddenList = styled.div<{ $isOpen: boolean }>`
    height: ${({ $isOpen }) => ($isOpen ? "auto" : "0")};
    overflow: hidden;
`;

export const StyledIcon = styled(Icon)<{ $isOpen: boolean }>`
    transform: ${({ $isOpen }) => `rotate(${$isOpen ? "180deg" : "0"})`};
`;

export const LineContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 1rem;
    width: 1rem;
    height: 1rem;
    transform: translateY(-50%);

    &::before {
        content: "";
        position: absolute;
        left: 1rem;
        top: 50%;
        transform: translateY(-50%);
        width: 3rem;
        height: 1px;
        background-color: darkgrey;
    }

    &::after {
        content: "";
        position: absolute;
        left: 50%;
        bottom: 1rem;
        transform: translateX(-50%);
        width: 1px;
        height: 3rem;
        background-color: darkgrey;
    }
`;

export const Circle = styled.div`
    position: absolute;
    top: 50%;
    left: 1rem;
    width: 1rem;
    height: 1rem;
    transform: translateY(-50%);
    border: 1px solid darkgrey;
    border-radius: ${borderRadius.round};
    background: ${({ theme }) => theme.secondary};
    transition: ${transition.fast};
    z-index: 1;
`;
