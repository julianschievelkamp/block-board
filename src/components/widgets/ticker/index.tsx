import Text from "components/elements/text";
import Div from "components/elements/div";
import Widget from "components/elements/widget";

import { assets } from "data/assets";
import { useTicker } from "hooks/useTicker";
import { AssetKey, Currency } from "data/types";

import { StyledIcon, StyledRadialTimer } from "./styles";
import Price from "./parts/price";
import Switch from "components/elements/switch";
import { lang } from "data/constants";

export interface TickerProps {
    assetKey: AssetKey;
    initialCurrency: Currency;
}

const Ticker = ({ assetKey, initialCurrency }: TickerProps) => {
    const {
        realTimeData,
        currency,
        setCurrency,
        refreshRate,
        isLoading,
        isFetching,
        setIsFetching,
        isError,
        lastUpdate,
    } = useTicker(assetKey, initialCurrency);

    const asset = assets[assetKey];

    return (
        <Widget isLoading={isLoading}>
            <Div
                display="flex"
                alignItems="center"
                justifyContent="space-between"
            >
                <Text
                    color={asset.color}
                    fontSize="1rem"
                    margin="0 2rem 0 0"
                    lineHeight="1"
                    bold
                >
                    {`${asset.symbol} ${asset.label.toUpperCase()}`}
                </Text>

                <Div display="flex" alignItems="center">
                    <Switch
                        options={["USD", "EUR"]}
                        currentOption={currency}
                        setCurrentOption={(option: string) =>
                            setCurrency(option as Currency)
                        }
                        color={asset.color}
                        disabled={isError || !isFetching}
                    />
                    <Div
                        width="1.5rem"
                        height="1.5rem"
                        margin="0 0 0 0.25rem"
                        onClick={() => setIsFetching(!isFetching)}
                    >
                        <StyledRadialTimer
                            trigger={[realTimeData, currency]}
                            isActive={isFetching}
                            duration={refreshRate}
                            color={asset.color}
                        />
                        <StyledIcon
                            size="0.75rem"
                            name={isFetching ? "stop" : "play"}
                            color={asset.color}
                        />
                    </Div>
                </Div>
            </Div>

            <Price value={realTimeData?.ask} currency={currency} />

            <Div
                display="flex"
                justifyContent="space-between"
                alignItems="center"
            >
                <Div></Div>
                <Div>
                    <Text textAlign="right" fontSize="0.75rem" color="darkgrey">
                        {lang.lastUpdate(
                            new Date(lastUpdate).toLocaleTimeString()
                        )}
                    </Text>
                    <Text
                        textAlign="right"
                        fontSize="0.75rem"
                        color={isError ? "red" : "darkgrey"}
                    >
                        {isError ? lang.error : lang.api}
                    </Text>
                </Div>
            </Div>
        </Widget>
    );
};

export default Ticker;
