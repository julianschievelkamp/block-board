import Text from "components/elements/text";
import Div from "components/elements/div";

import { assets } from "data/assets";
import { useTicker } from "hooks/useTicker";
import { Currency } from "data/types";
import { formatPrice } from "utils/helpers";

import { StyledIcon, StyledRadialTimer } from "./styles";
import Card from "components/elements/card";
import Price from "./parts/price";

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
                margin="0 0 0.5rem 0"
            >
                <Text color="white" fontSize="1rem">
                    {`${asset.symbol} ${asset.label.toUpperCase()}`}
                </Text>
                <Div width="1.5rem" height="1.5rem">
                    <StyledRadialTimer
                        trigger={[realTimeData, currency]}
                        duration={refreshRate}
                    />
                    <StyledIcon size="1rem" name="info" />
                </Div>
            </Div>
            <Price value={realTimeData.ask} currency={currency} />

            {/* <button
                onClick={() => setCurrency(currency === "USD" ? "EUR" : "USD")}
            >
                Toggle Currency
            </button> */}
        </Card>
    );
};

export default Ticker;
