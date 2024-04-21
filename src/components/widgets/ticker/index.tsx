import Text from "components/elements/text";
import Div from "components/elements/div";
import Widget from "components/elements/widget";
import Switch from "components/elements/switch";
import LineChart from "components/elements/line-chart";
import RadialTimer from "components/elements/radial-timer";

import { assets } from "data/assets";
import { useTicker } from "hooks/useTicker";
import { AssetKey, Currency } from "data/types";

import { lang } from "data/constants";

import Price from "./price";

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
                    <RadialTimer
                        trigger={[realTimeData, currency]}
                        isActive={isFetching}
                        setIsActive={() => setIsFetching(!isFetching)}
                        duration={refreshRate}
                        color={asset.color}
                    />
                </Div>
            </Div>

            <Price value={realTimeData?.ask} currency={currency} />

            <Div
                display="flex"
                justifyContent="space-between"
                alignItems="center"
            >
                <LineChart data={realTimeData?.changes} />
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
