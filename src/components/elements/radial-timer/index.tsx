import { useEffect, useState } from "react";

import { StyledIcon, StyledPath, StyledSvg } from "./styles";

import Div from "components/elements/div";

export interface RadialTimerProps {
    trigger: any[];
    setIsActive: () => void;
    isActive: boolean;
    duration?: number;
    color?: string;
    size?: string;
    className?: string;
}

const RadialTimer = ({
    trigger,
    isActive,
    setIsActive,
    duration = 5000,
    color,
    size = "1.5rem",
    className,
}: RadialTimerProps) => {
    const [animation, setAnimation] = useState(0);
    const animationDelay = 50;

    useEffect(() => {
        setAnimation(0);

        if (isActive) {
            setTimeout(() => {
                setAnimation(1);
            }, animationDelay);
        }
        // eslint-disable-next-line
    }, [...trigger, isActive]);

    return (
        <Div
            width={size}
            height={size}
            onClick={setIsActive}
            className={className}
        >
            <StyledSvg
                viewBox="0 0 36 36"
                $size={size}
                $duration={duration}
                $animationDelay={animationDelay}
            >
                <StyledPath
                    d="M18 3
        a 15 15 0 0 1 0 30
        a 15 15 0 0 1 0 -30"
                    fill="none"
                    color={color}
                    strokeDasharray="100, 100"
                    strokeWidth={1}
                    data-animation={animation}
                />
            </StyledSvg>
            <StyledIcon
                size={size}
                name={isActive ? "stop" : "play"}
                color={color}
            />
        </Div>
    );
};

export default RadialTimer;
