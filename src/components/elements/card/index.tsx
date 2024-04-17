import React from "react";

import Text from "components/elements/text";

import { assets } from "data/assets";

import { StyledCard } from "./styles";


export interface CardProps {
    assetKey: keyof typeof assets;
}

const Card = ({ assetKey }: CardProps) => {
    const asset = assets[assetKey];

    return (
        <StyledCard asset={asset}>
            <Text color="white">{asset.label}</Text>
        </StyledCard>
    );
};

export default Card;
