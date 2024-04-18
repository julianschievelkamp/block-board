import React from "react";

import { icons } from "./icons";

import { StyledIcon } from "./styles";

export interface IconProps {
    name: keyof typeof icons;
    color: string;
    size?: string;
    margin?: string;
    onClick?: () => void;
    className?: string;
}

const Icon = ({
    name,
    color = "black",
    size = "2rem",
    margin,
    onClick,
    className,
}: IconProps) => {
    const Icon = icons[name];

    return (
        <StyledIcon
            color={color}
            size={size}
            margin={margin}
            onClick={onClick}
            className={className}
        >
            <Icon />
        </StyledIcon>
    );
};

export default Icon;
