import React from "react";

import Text from "components/elements/text";

import { assets } from "data/assets";

import { StyledCard } from "./styles";
import { useTicker } from "hooks/useTicker";
import { Currency } from "data/types";
import { formatCurrency } from "utils/helpers";

export interface CardProps {
    initialAssetKey: keyof typeof assets;
    initialCurrency: Currency;
}

const Card = ({ initialAssetKey, initialCurrency }: CardProps) => {
    const { price, assetKey, currency } = useTicker(
        initialAssetKey,
        initialCurrency
    );
    const asset = assets[assetKey];

    return (
        <StyledCard asset={asset}>
            <Text color="white">{asset.label}</Text>
            <Text color="white">{formatCurrency(price, currency)}</Text>
        </StyledCard>
    );
};

export default Card;
