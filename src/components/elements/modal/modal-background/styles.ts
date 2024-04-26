import styled from "styled-components";
import { ModalContainer } from "../styles";

export const StyledModalBackground = styled(ModalContainer)`
    background: rgb(0, 0, 0, 0.25);
    backdrop-filter: blur(4px);
    pointer-events: ${({ $isOpen }) => ($isOpen ? "all" : "none")};
`;
