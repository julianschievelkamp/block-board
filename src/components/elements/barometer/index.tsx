import { Indicator, IndicatorBorder, StyledSvg } from "./styles";

import Div from "components/elements/div";
import Text from "components/elements/text";
import { mapNumber } from "utils/helpers";

export interface BarometerProps {
    value?: number;
    steps?: string[];
    note?: string;
    size?: string;
}

const Barometer = ({
    value = 0,
    steps = ["red", "orange", "yellow", "yellowgreen", "green"],
    note,
    size = "10rem",
}: BarometerProps) => {
    const stepLength = 50 / steps.length - 2.5;
    const stepOffset = -stepLength - 2.375;

    const indicatorWidth = 3;
    const indicatorOffset = -(
        mapNumber(value, 0, 100, indicatorWidth, 100 - indicatorWidth) / 2 -
        indicatorWidth / 2
    );

    return (
        <Div
            width="100%"
            height={`calc(${size} / 2)`}
            display="flex"
            justifyContent="center"
        >
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
                            strokeWidth={2}
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
                    strokeWidth={indicatorWidth + 1}
                />
                <Indicator
                    d="M18 3
        a 15 15 0 0 1 0 30
        a 15 15 0 0 1 0 -30"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray="0, 100"
                    strokeDashoffset={indicatorOffset}
                    strokeWidth={indicatorWidth}
                />
            </StyledSvg>

            <Div position="absolute" top="50%">
                <Text textAlign="center" lineHeight="1" fontSize="2rem">
                    {value}
                </Text>
                {note && (
                    <Text
                        textAlign="center"
                        lineHeight="1"
                        fontSize="0.75rem"
                        color="darkgrey"
                    >
                        {note}
                    </Text>
                )}
            </Div>
        </Div>
    );
};

export default Barometer;
