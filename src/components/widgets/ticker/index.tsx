import Text from "components/elements/text";
import Div from "components/elements/div";
import Widget from "components/elements/widget";

import { assets } from "data/assets";
import { useTicker } from "hooks/useTicker";
import { AssetKey, Currency } from "data/types";

import { StyledIcon, StyledRadialTimer } from "./styles";
import Price from "./parts/price";

export interface TickerProps {
    assetKey: AssetKey;
    initialCurrency: Currency;
}

const Ticker = ({ assetKey, initialCurrency }: TickerProps) => {
    const { realTimeData, currency, setCurrency, refreshRate, isLoading } =
        useTicker(assetKey, initialCurrency);

    const asset = assets[assetKey];

    return (
        <Widget bgColor={asset.color} isLoading={isLoading}>
            <Div
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                margin="0 0 0.5rem 0"
            >
                <Text color="white" fontSize="1rem">
                    {`${asset.symbol} ${asset.label.toUpperCase()}`}
                </Text>

                <Div display="flex">
                    <button
                        onClick={() =>
                            setCurrency(currency === "USD" ? "EUR" : "USD")
                        }
                    >
                        {currency}
                    </button>
                    <Div width="1.5rem" height="1.5rem" margin="0 0 0 0.25rem">
                        <StyledRadialTimer
                            trigger={[realTimeData, currency]}
                            duration={refreshRate}
                        />
                        <StyledIcon size="1rem" name="info" color="white" />
                    </Div>
                </Div>
            </Div>

            <Price value={realTimeData?.ask} currency={currency} />
        </Widget>
    );
};

export default Ticker;
