import React from "react";

import { StyledButton } from "./styles";

import Text from "components/elements/text";
import Icon from "components/elements/icon";

import { icons } from "../icon/icons";

export interface ButtonProps {
    onClick: () => void;
    children?: React.ReactNode;
    iconName?: keyof typeof icons;
    disabled?: boolean;
    className?: string;
}

const Button = ({
    onClick,
    children,
    iconName,
    disabled,
    className,
}: ButtonProps) => {
    return (
        <StyledButton
            onClick={onClick}
            $iconName={iconName}
            disabled={disabled}
            className={className}
        >
            {iconName && <Icon name={iconName} size="1.5rem" margin="0.5rem" />}
            {children && (
                <Text bold margin="0.5rem">
                    {children}
                </Text>
            )}
        </StyledButton>
    );
};

export default Button;
