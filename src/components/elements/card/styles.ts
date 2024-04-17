import styled from "styled-components";
import { borderRadius, transition } from "styles/variables";

export const StyledCard = styled.div`
    position: relative;
    border-radius: ${borderRadius.edged};
    border: 1px solid ${({ theme }) => theme.border};
    background-color: ${({ theme }) => theme.primary};
    transition: ${transition.fast};
    padding: 1rem;
    width: 100%;
`;
