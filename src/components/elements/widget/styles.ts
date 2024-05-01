import styled from "styled-components";
import { borderRadius, queries, shadow, transition } from "styles/variables";

export const StyledWidget = styled.div<{
    $isLoading: boolean;
    $isActive: boolean;
}>`
    opacity: ${({ $isLoading, $isActive }) =>
        $isLoading ? 0 : $isActive ? 1 : 0.5};
    border-radius: ${borderRadius.edged};
    border: 1px solid ${({ theme }) => theme.border};
    background-color: ${({ theme }) => theme.secondary};
    transition: ${transition.fast};
    padding: 1rem;
    overflow: hidden;
    height: 100%;

    @media ${queries.hover} {
        &:hover {
            transform: translateY(-3px);
            box-shadow: ${shadow.soft};
        }
    }
`;

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