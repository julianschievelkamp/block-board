import styled from "styled-components";
import { queries, transition } from "styles/variables";

export const Controls = styled.div`
    display: flex;
    align-items: center;

    & > * {
        margin-left: 0.25rem;
    }
`;

export const HoverControls = styled(Controls)<{ $isHover: boolean }>`
    transition: ${transition.fast};
    margin-right: 0.25rem;

    @media ${queries.hover} {
        opacity: ${({ $isHover }) => ($isHover ? 1 : 0)};
    }
`;
