import styled from "styled-components";
import { borderRadius } from "styles/variables";

export const StyledButton = styled.button`
    border: 1px solid white;
    padding: 0 0.5rem;
    background: transparent;
    border-radius: ${borderRadius.round};
    cursor: pointer;
`;
