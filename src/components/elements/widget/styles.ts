import styled, { css } from "styled-components";
import { borderRadius, queries, shadow, transition } from "styles/variables";

export const StyledWidget = styled.div<{
    $isLoading: boolean;
    $isHover: boolean;
}>`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    opacity: ${({ $isLoading }) => ($isLoading ? 0 : 1)};
    border-radius: ${borderRadius.edged};
    border: 1px solid ${({ theme }) => theme.border};
    background-color: ${({ theme }) => theme.secondary};
    transition: ${transition.fast};
    padding: 1rem;
    overflow: hidden;
    height: 100%;

    @media ${queries.hover} {
        ${({ $isHover }) =>
            $isHover &&
            css`
                transform: translateY(-3px);
                box-shadow: ${shadow.soft};
            `}
    }
`;

export const SpinnerContainer = styled.div<{
    $isLoading: boolean;
}>`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: ${({ $isLoading }) => ($isLoading ? 1 : 0)};
    border-radius: ${borderRadius.edged};
    border: 1px solid ${({ theme }) => theme.border};
    background-color: ${({ theme }) => theme.body};
    transition: ${transition.fast};
    padding: 1rem;
    overflow: hidden;
    height: 100%;
    width: 100%;
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

export const ContentOpacity = styled.div<{ $isActive: boolean }>`
    opacity: ${({ $isActive }) => ($isActive ? 1 : 0.25)};
    transition: ${transition.fast};
`;
