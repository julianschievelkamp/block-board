import styled from "styled-components";
import { borderRadius } from "styles/variables";

export const StyledImage = styled.img`
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    border-radius: ${borderRadius.round};
`;
