import { Indicator, IndicatorBorder, StyledSvg } from "./styles";

import Div from "components/elements/div";
import Text from "components/elements/text";
import { lang } from "data/lang";
import { mapNumber } from "utils/helpers";

export interface BarometerProps {
    value?: number;
    steps?: string[];
    note?: string;
    isError?: boolean;
    size?: string;
}

const Barometer = ({
    value = 0,
    steps = ["red", "orange", "yellow", "yellowgreen", "green"],
    note,
    isError,
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

            <Div position="absolute" top="50%">
                {!isError ? (
                    <>
                        <Text
                            textAlign="center"
                            lineHeight="1"
                            fontSize="1.5rem"
                            bold
                        >
                            {value}
                        </Text>
                        <Text
                            textAlign="center"
                            fontSize="0.75rem"
                            color="darkgrey"
                        >
                            {note}
                        </Text>
                    </>
                ) : (
                    <Div margin="0 1.75rem">
                        <Text textAlign="center" fontSize="0.75rem" color="red">
                            {lang.error}
                        </Text>
                    </Div>
                )}
            </Div>
        </Div>
    );
};

export default Barometer;
