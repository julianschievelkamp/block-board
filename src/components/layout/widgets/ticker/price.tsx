import { useEffect, useState } from "react";

import Text from "components/elements/text";

import { formatPrice } from "utils/helpers";
import { Currency } from "data/types";

import { StyledPrice } from "./styles";

export interface PriceProps {
    value: number | undefined;
    currency: Currency;
    isError: boolean;
}

const Price = ({ value, currency, isError }: PriceProps) => {
    const [animation, setAnimation] = useState(0);
    const [lastPrice, setLastPrice] = useState(0);
    const [signalColor, setSignalColor] = useState("");

    useEffect(() => {
        if (value) {
            if (lastPrice > 0) {
                setSignalColor(value > lastPrice ? "green" : "red");
            }

            setLastPrice(value);

            setTimeout(() => {
                setAnimation(1);
            }, 50);
        }
        // eslint-disable-next-line
    }, [value]);

    return (
        <StyledPrice
            $signalColor={signalColor}
            onAnimationEnd={() => setAnimation(0)}
        >
            <Text
                fontSize="3rem"
                lineHeight="1"
                margin="0 0 1rem 0"
                data-animation={animation}
            >
                {formatPrice(value && !isError ? value : 0, currency)}
            </Text>
        </StyledPrice>
    );
};

export default Price;
