import { Indicator, IndicatorBorder, StyledSvg } from "./styles";

import Div from "components/elements/div";
import Text from "components/elements/text";

export interface BarometerProps {
    size?: string;
}

const Barometer = ({ size = "10rem" }: BarometerProps) => {
    const colors = ["red", "orange", "yellow", "yellowgreen", "green"];
    const ringWidth = 50 / colors.length;
    const indicatorOffset = -9;

    return (
        <Div
            width="100%"
            height={`calc(${size} / 2)`}
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
                            strokeLinecap="round"
                            strokeDasharray={`${ringWidth - 2.5}, 100`}
                            strokeDashoffset={(-ringWidth + 0.125) * index}
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
                    strokeWidth={4}
                />
                <Indicator
                    d="M18 3
        a 15 15 0 0 1 0 30
        a 15 15 0 0 1 0 -30"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray="0, 100"
                    strokeDashoffset={indicatorOffset}
                    strokeWidth={3}
                />
            </StyledSvg>
            <Div position="absolute" top="50%">
                <Text textAlign="center" lineHeight="1" fontSize="2rem">
                    56
                </Text>
                <Text
                    textAlign="center"
                    lineHeight="1"
                    fontSize="0.75rem"
                    color="darkgrey"
                >
                    Neutral
                </Text>
            </Div>
        </Div>
    );
};

export default Barometer;
