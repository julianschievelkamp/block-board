import styled from "styled-components";
import { borderRadius, transition } from "styles/variables";

export const AlertCard = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    margin-bottom: 0.5rem;
    border: 1px solid ${({ theme }) => theme.border};
    background-color: ${({ theme }) => theme.secondary};
    border-radius: ${borderRadius.edged};
    transition: ${transition.fast};
`;

export const AlertChild = styled(AlertCard)`
    margin-left: 20%;
`;
