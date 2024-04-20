import { useEffect, useState } from "react";

import Text from "components/elements/text";

import { formatPrice } from "utils/helpers";
import { Currency } from "data/types";
import { StyledPrice } from "./styles";

export interface PriceProps {
    value: number | undefined;
    currency: Currency;
}

const Price = ({ value, currency }: PriceProps) => {
    const [animation, setAnimation] = useState(0);
    const [lastPrice, setLastPrice] = useState(0);
    const [priceColor, setPriceColor] = useState("");

    useEffect(() => {
        if (value) {
            if (lastPrice > 0) {
                setPriceColor(value > lastPrice ? "green" : "red");
            }

            setLastPrice(value);

            setAnimation(0);
            setTimeout(() => {
                setAnimation(1);
            }, 50);
        }
        // eslint-disable-next-line
    }, [value]);

    return (
        <StyledPrice color={priceColor}>
            <Text
                fontSize="3rem"
                lineHeight="1"
                margin="1rem 0"
                data-animation={animation}
            >
                {formatPrice(value ?? 0, currency)}
            </Text>
        </StyledPrice>
    );
};

export default Price;
