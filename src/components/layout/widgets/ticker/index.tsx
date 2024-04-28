import Text from "components/elements/text";
import Div from "components/elements/div";
import Widget from "components/elements/widget";
import Switch from "components/elements/switch";
import LineChart from "components/elements/line-chart";
import RadialTimer from "components/elements/radial-timer";
import Icon from "components/elements/icon";

import { assets } from "data/constants";
import { useTicker } from "hooks/useTicker";
import { AssetKey, Currency } from "data/types";

import { lang } from "data/constants";

import Price from "./price";
import { useStore } from "state/useStore";

export interface TickerProps {
    assetKey: AssetKey;
}

const Ticker = ({ assetKey }: TickerProps) => {
    const { primaryCurrency, secondaryCurrency } = useStore();
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
    } = useTicker(assetKey);

    const asset = assets[assetKey];

    return (
        <Widget
            widgetKey={assetKey}
            title={`${asset.symbol} ${asset.label.toUpperCase()}`}
            color={asset.color}
            isLoading={isLoading}
            controls={
                <>
                    <Switch
                        options={[primaryCurrency, secondaryCurrency]}
                        currentOption={currency}
                        setCurrentOption={(option: string) => {
                            setCurrency(option as Currency);
                            setIsFetching(true);
                        }}
                        color={asset.color}
                    />
                    <RadialTimer
                        trigger={[realTimeData, currency]}
                        isActive={isFetching}
                        setIsActive={() => setIsFetching(!isFetching)}
                        duration={refreshRate}
                        color={asset.color}
                    />
                </>
            }
            hoverControls={
                <Icon
                    onClick={() => {}}
                    name="notifications"
                    size="1rem"
                    color={asset.color}
                />
            }
        >
            <Price
                value={realTimeData?.ask}
                currency={currency}
                isError={isError}
            />

            <Div
                display="flex"
                justifyContent="space-between"
                alignItems="flex-end"
            >
                <LineChart
                    data={realTimeData?.changes.reverse()}
                    isError={isError}
                />

                <Div>
                    <Text textAlign="right" fontSize="0.5rem" color="darkgrey">
                        {lang.lastUpdate(
                            new Date(lastUpdate).toLocaleTimeString()
                        )}
                    </Text>
                    <Text
                        textAlign="right"
                        fontSize="0.5rem"
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
