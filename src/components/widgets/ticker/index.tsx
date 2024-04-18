import Text from "components/elements/text";
import Div from "components/layout/div";

import { assets } from "data/assets";
import { useTicker } from "hooks/useTicker";
import { Currency } from "data/types";
import { formatPrice } from "utils/helpers";

import { StyledIcon, StyledRadialTimer } from "./styles";
import Card from "components/elements/card";

export interface TickerProps {
    initialAssetKey: keyof typeof assets;
    initialCurrency: Currency;
}

const Ticker = ({ initialAssetKey, initialCurrency }: TickerProps) => {
    const { realTimeData, assetKey, currency, setCurrency, refreshRate } =
        useTicker(initialAssetKey, initialCurrency);

    const asset = assets[assetKey];

    return (
        <Card bgColor={asset.color}>
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
                    <StyledRadialTimer
                        trigger={[realTimeData, currency]}
                        ms={refreshRate}
                    />
                    <StyledIcon size="1rem" name="info" />
                </Div>
            </Div>
            <Text color="white" fontSize="3rem">
                {formatPrice(realTimeData.ask, currency)}
            </Text>
        </Card>
    );
};

export default Ticker;
