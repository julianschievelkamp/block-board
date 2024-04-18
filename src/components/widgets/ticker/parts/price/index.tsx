import React, { useEffect, useState } from "react";

import Text from "components/elements/text";

import { formatPrice } from "utils/helpers";
import { Currency } from "data/types";
import { StyledPrice, TextContainer } from "./styles";

export interface PriceProps {
    value: number;
    currency: Currency;
}

const Price = ({ value, currency }: PriceProps) => {
    const [animation, setAnimation] = useState(0);
    const [lastPrice, setLastPrice] = useState(0);
    const [priceColor, setPriceColor] = useState("green");

    useEffect(() => {
        setPriceColor(value < lastPrice ? "red" : "green");
        setLastPrice(value);

        setAnimation(0);

        setTimeout(() => {
            setAnimation(1);
        }, 50);
    }, [value]);

    return (
        <StyledPrice color={priceColor}>
            <TextContainer data-animation={animation}>
                <Text fontSize="3rem">{formatPrice(value, currency)}</Text>
            </TextContainer>
        </StyledPrice>
    );
};

export default Price;
