import Text from "components/elements/text";
import Div from "components/elements/div";

import { assets } from "data/assets";
import { useTicker } from "hooks/useTicker";
import { AssetKey, Currency } from "data/types";

import { StyledIcon, StyledRadialTimer } from "./styles";
import Card from "components/elements/card";
import Price from "./parts/price";
import Toggle from "components/elements/button";
import Button from "components/elements/button";

export interface TickerProps {
    assetKey: AssetKey;
    initialCurrency: Currency;
}

const Ticker = ({ assetKey, initialCurrency }: TickerProps) => {
    const { realTimeData, currency, setCurrency, refreshRate, setRefreshRate } =
        useTicker(assetKey, initialCurrency);

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

                <Div display="flex">
                    <Button
                        onClick={() =>
                            setCurrency(currency === "USD" ? "EUR" : "USD")
                        }
                    >
                        {currency}
                    </Button>
                    <Div width="1.5rem" height="1.5rem" margin="0 0 0 0.25rem">
                        <StyledRadialTimer
                            trigger={[realTimeData, currency]}
                            duration={refreshRate}
                        />
                        <StyledIcon size="1rem" name="info" />
                    </Div>
                </Div>
            </Div>

            <Price value={realTimeData?.ask} currency={currency} />

            {/* <Div>
                <button
                    onClick={() =>
                        setRefreshRate(refreshRate === 5000 ? 10000 : 5000)
                    }
                >
                    Toggle RefreshRate
                </button>
            </Div> */}
        </Card>
    );
};

export default Ticker;
