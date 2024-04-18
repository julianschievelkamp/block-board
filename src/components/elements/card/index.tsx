import Text from "components/elements/text";
import Div from "components/layout/div";

import { assets } from "data/assets";

import { useTicker } from "hooks/useTicker";
import { Currency } from "data/types";
import { formatCurrency } from "utils/helpers";

import { StyledCard } from "./styles";
import Icon from "../icon";

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
        <StyledCard asset={asset}>
            <Div
                display="flex"
                alignItems="center"
                justifyContent="space-between"
            >
                <Text color="white">{asset.label}</Text>
                <Icon
                    color="white"
                    name="info"
                    size="1rem"
                    onClick={() =>
                        setCurrency(currency === "USD" ? "EUR" : "USD")
                    }
                />
            </Div>
            <Text color="white" fontSize="2rem">
                {formatCurrency(realTimeData.ask, currency)}
            </Text>
        </StyledCard>
    );
};

export default Card;
