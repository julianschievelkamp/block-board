import Text from "components/elements/text";
import Div from "components/elements/div";

import { assets } from "data/assets";
import { useTicker } from "hooks/useTicker";
import { AssetKey, Currency } from "data/types";

import { StyledCard, StyledIcon, StyledRadialTimer } from "./styles";
import Price from "./parts/price";
import Button from "components/elements/button";

export interface TickerProps {
    assetKey: AssetKey;
    initialCurrency: Currency;
}

const Ticker = ({ assetKey, initialCurrency }: TickerProps) => {
    const { realTimeData, currency, setCurrency, refreshRate, isLoading } =
        useTicker(assetKey, initialCurrency);

    const asset = assets[assetKey];

    return (
        <StyledCard bgColor={asset.color} isLoading={isLoading}>
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
        </StyledCard>
    );
};

export default Ticker;
