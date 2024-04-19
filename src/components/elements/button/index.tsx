import React from "react";
import { StyledButton } from "./styles";
import Text from "../text";

export interface ButtonProps {
    onClick: () => void;
    children: React.ReactNode;
}

const Button = ({ children, onClick }: ButtonProps) => {
    return (
        <StyledButton onClick={onClick}>
            <Text color="white" fontSize="0.5rem">
                {children}
            </Text>
        </StyledButton>
    );
};

export default Button;
