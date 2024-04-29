import { StyledSvg } from "./styles";

import Div from "components/elements/div";

export interface BarometerProps {
    size?: string;
}

const Barometer = ({ size = "9rem" }: BarometerProps) => {
    const colors = ["red", "orange", "yellow", "yellowgreen", "green"];
    const ringWidth = 50 / colors.length;
    const margin = 1;

    return (
        <Div
            width="100%"
            height={`calc(${size} / 2 + 0.75rem)`}
            display="flex"
            justifyContent="center"
        >
            <StyledSvg viewBox="0 0 36 36" $size={size}>
                {colors.map((color, index) => {
                    return (
                        <path
                            key={color}
                            d="M18 3
        a 15 15 0 0 1 0 30
        a 15 15 0 0 1 0 -30"
                            fill="none"
                            stroke={color}
                            strokeDasharray={`${ringWidth - margin}, 100`}
                            strokeDashoffset={
                                (-ringWidth + margin * 0.5) * index
                            }
                            strokeWidth={2}
                        />
                    );
                })}
            </StyledSvg>
        </Div>
    );
};

export default Barometer;
