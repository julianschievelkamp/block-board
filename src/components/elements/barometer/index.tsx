import { Indicator, IndicatorBorder, StyledSvg } from "./styles";

import Div from "components/elements/div";
import { mapNumber } from "utils/helpers";

export interface BarometerProps {
    value?: number;
    steps?: string[];
    size?: string;
}

const Barometer = ({
    value = 0,
    steps = ["red", "orange", "yellow", "yellowgreen", "green"],
    size = "10rem",
}: BarometerProps) => {
    const stepLength = 50 / steps.length - 2.5;
    const stepOffset = -stepLength - 2.375;

    const strokeWidth = 2;
    const indicatorOffset = -(
        mapNumber(value, 0, 100, strokeWidth, 100 - strokeWidth * 2) / 2 -
        strokeWidth / 2
    );

    return (
        <Div width="100%" height={`calc(${size} / 2)`}>
            <StyledSvg viewBox="0 0 36 36" $size={size}>
                {steps.map((step, index) => {
                    return (
                        <path
                            key={step}
                            d="M18 3
        a 15 15 0 0 1 0 30
        a 15 15 0 0 1 0 -30"
                            fill="none"
                            stroke={step}
                            strokeLinecap="round"
                            strokeDasharray={`${stepLength}, 100`}
                            strokeDashoffset={stepOffset * index}
                            strokeWidth={strokeWidth}
                        />
                    );
                })}

                <IndicatorBorder
                    d="M18 3
        a 15 15 0 0 1 0 30
        a 15 15 0 0 1 0 -30"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray="0, 100"
                    strokeDashoffset={indicatorOffset}
                    strokeWidth={strokeWidth + 1}
                />
                <Indicator
                    d="M18 3
        a 15 15 0 0 1 0 30
        a 15 15 0 0 1 0 -30"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray="0, 100"
                    strokeDashoffset={indicatorOffset}
                    strokeWidth={strokeWidth}
                />
            </StyledSvg>
        </Div>
    );
};

export default Barometer;
