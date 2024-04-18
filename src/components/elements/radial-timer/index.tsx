import { useEffect, useState } from "react";
import { Ring, StyledSVG } from "./styles";

export interface RadialTimerProps {
    trigger: any[];
    ms: number;
    color?: string;
    offset?: number;
    className?: string;
    size?: string;
}

const RadialTimer = ({
    trigger,
    ms,
    color = "white",
    offset,
    className,
    size = "2rem",
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
            $ms={ms}
        >
            <Ring
                d="M18 3
        a 15 15 0 0 1 0 30
        a 15 15 0 0 1 0 -30"
                fill="none"
                stroke={color}
                strokeDashoffset={offset}
                animation={animation}
            />
        </StyledSVG>
    );
};

export default RadialTimer;
