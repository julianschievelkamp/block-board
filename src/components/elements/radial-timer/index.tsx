import { useEffect, useState } from "react";
import { Ring, StyledSVG } from "./styles";

export interface RadialTimerProps {
    trigger: any[];
    duration: number;
    color?: string;
    className?: string;
    size?: string;
}

const RadialTimer = ({
    trigger,
    duration,
    color = "white",
    className,
    size = "1.5rem",
}: RadialTimerProps) => {
    const [animation, setAnimation] = useState(0);

    useEffect(() => {
        setAnimation(0);

        setTimeout(() => {
            setAnimation(1);
        }, 50);
    }, [trigger]);

    return (
        <StyledSVG
            viewBox="0 0 36 36"
            className={className}
            $size={size}
            $duration={duration}
        >
            <Ring
                d="M18 3
        a 15 15 0 0 1 0 30
        a 15 15 0 0 1 0 -30"
                fill="none"
                stroke={color}
                data-animation={animation}
            />
        </StyledSVG>
    );
};

export default RadialTimer;
