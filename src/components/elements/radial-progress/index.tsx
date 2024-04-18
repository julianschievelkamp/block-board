import { Ring, StyledSVG } from "./styles";

export interface RadialProgressProps {
    length?: number;
    color?: string;
    offset?: number;
    className?: string;
    size?: string;
}

const RadialProgress = ({
    length = 100,
    color = "black",
    offset,
    className,
    size = "2rem",
}: RadialProgressProps) => {
    return (
        <StyledSVG viewBox="0 0 36 36" $size={size} className={className}>
            <Ring
                d="M18 3
        a 15 15 0 0 1 0 30
        a 15 15 0 0 1 0 -30"
                fill="none"
                stroke={color}
                strokeWidth="2"
                strokeDasharray={`${length}, 100`}
                strokeDashoffset={offset}
            />
        </StyledSVG>
    );
};

export default RadialProgress;
