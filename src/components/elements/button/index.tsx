import React from "react";

import { StyledButton } from "./styles";

import Text from "components/elements/text";
import Icon from "components/elements/icon";

import { icons } from "../icon/icons";

export interface ButtonProps {
    onClick: () => void;
    children?: React.ReactNode;
    iconName?: keyof typeof icons;
    iconPosition?: "left" | "right";
    disabled?: boolean;
    className?: string;
}

const Button = ({
    onClick,
    children,
    iconName,
    iconPosition = "left",
    disabled,
    className,
}: ButtonProps) => {
    return (
        <StyledButton
            onClick={onClick}
            iconName={iconName}
            iconPosition={iconPosition}
            disabled={disabled}
            className={className}
        >
            {iconName && (
                <Icon name={iconName} size="1.5rem" margin="0.5rem 0" />
            )}
            {children && (
                <Text margin="0.5rem 1rem" bold>
                    {children}
                </Text>
            )}
        </StyledButton>
    );
};

export default Button;
