import { Indicator, Option, StyledSwitch, StyledText } from "./styles";

export interface SwitchProps {
    options: [string, string];
    currentOption: string;
    setCurrentOption: (option: string) => void;
    color?: string;
    disabled?: boolean;
}

const Switch = ({
    options,
    currentOption,
    setCurrentOption,
    color,
    disabled = false,
}: SwitchProps) => {
    const currentIndex = options.indexOf(currentOption);
    const indicatorWidth = 100 / options.length;
    const offset = currentIndex * indicatorWidth;

    return (
        <StyledSwitch
            onClick={() =>
                !disabled &&
                setCurrentOption(options[currentIndex === 0 ? 1 : 0])
            }
            disabled={disabled}
            color={color}
        >
            <Indicator width={indicatorWidth} $offset={offset} color={color} />

            {options.map((option, index) => {
                return (
                    <Option key={option}>
                        <StyledText
                            $isActive={index === currentIndex}
                            color={color}
                            fontSize="0.5rem"
                        >
                            {option}
                        </StyledText>
                    </Option>
                );
            })}
        </StyledSwitch>
    );
};

export default Switch;
