import { Theme } from "data/types";
import { icons } from "./icons";

import { StyledIcon } from "./styles";

export interface IconProps {
    name: keyof typeof icons;
    themeColor?: keyof Theme;
    size?: string;
    margin?: string;
    onClick?: () => void;
    className?: string;
}

const Icon = ({
    name,
    themeColor = "icon",
    onClick,
    className,
    size = "2rem",
    margin,
}: IconProps) => {
    const Icon = icons[name];

    return (
        <StyledIcon
            $themeColor={themeColor}
            $size={size}
            $margin={margin}
            onClick={onClick}
            className={className}
        >
            <Icon />
        </StyledIcon>
    );
};

export default Icon;
