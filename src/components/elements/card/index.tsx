import Text from "components/elements/text";
import Div from "components/layout/div";

import { assets } from "data/assets";
import { useTicker } from "hooks/useTicker";
import { Currency } from "data/types";
import { formatPrice } from "utils/helpers";

import { StyledCard, StyledIcon, StyledRadialProgress } from "./styles";

export interface CardProps {
    initialAssetKey: keyof typeof assets;
    initialCurrency: Currency;
}

const Card = ({ initialAssetKey, initialCurrency }: CardProps) => {
    const { realTimeData, assetKey, currency, setCurrency } = useTicker(
        initialAssetKey,
        initialCurrency
    );

    const asset = assets[assetKey];

    return (
        <StyledCard $asset={asset}>
            <Div
                display="flex"
                alignItems="center"
                justifyContent="space-between"
            >
                <Text color="white" fontSize="1.5rem">
                    {asset.label}
                </Text>
                <Div
                    width="2rem"
                    height="2rem"
                    onClick={() =>
                        setCurrency(currency === "USD" ? "EUR" : "USD")
                    }
                >
                    <StyledRadialProgress color="white" length={75} />
                    <StyledIcon size="1rem" color="white" name="info" />
                </Div>
            </Div>
            <Text color="white" fontSize="3rem">
                {formatPrice(realTimeData.ask, currency)}
            </Text>
        </StyledCard>
    );
};

export default Card;
