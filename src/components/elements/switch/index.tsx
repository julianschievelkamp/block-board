import React from "react";
import { Indicator, Option, StyledSwitch } from "./styles";
import Text from "../text";

export interface SwitchProps {
    options: [string, string];
    currentOption: string;
    setCurrentOption: (option: string) => void;
    color: string;
}

const Switch = ({
    options,
    currentOption,
    setCurrentOption,
    color,
}: SwitchProps) => {
    const currentIndex = options.indexOf(currentOption);
    const indicatorWidth = 100 / options.length;
    const offset = currentIndex * indicatorWidth;

    return (
        <StyledSwitch
            onClick={() =>
                setCurrentOption(options[currentIndex === 0 ? 1 : 0])
            }
        >
            <Indicator width={indicatorWidth} $offset={offset} />

            {options.map((option, index) => {
                return (
                    <Option key={option}>
                        <Text
                            color={index === currentIndex ? color : "white"}
                            fontSize="0.5rem"
                        >
                            {option}
                        </Text>
                    </Option>
                );
            })}
        </StyledSwitch>
    );
};

export default Switch;
