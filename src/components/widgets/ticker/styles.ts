import styled from "styled-components";
import { transition } from "styles/variables";

export const Controls = styled.div`
    display: flex;
    align-items: center;

    & > * {
        margin-left: 0.25rem;
    }
`;

export const HoverControls = styled(Controls)<{ $isHover: boolean }>`
    opacity: ${({ $isHover }) => ($isHover ? 1 : 0)};
    transition: ${transition.fast};
    margin-right: 0.25rem;
`;
