import Text from "components/elements/text";
import Div from "components/elements/div";
import Widget from "components/elements/widget";
import Switch from "components/elements/switch";
import LineChart from "components/elements/line-chart";
import RadialTimer from "components/elements/radial-timer";
import Icon from "components/elements/icon";
import Image from "components/elements/image";

import { assets } from "data/data";
import { useTicker } from "hooks/useTicker";
import { AssetKey, Currency } from "data/types";
import { useStore } from "data/store";
import { lang } from "data/lang";

import Price from "./price";
import { LineChartContainer } from "./styles";
import { formatChange, getChangeColor } from "utils/helpers";

export interface TickerProps {
    assetKey: AssetKey;
}

const Ticker = ({ assetKey }: TickerProps) => {
    const { primaryCurrency, secondaryCurrency, setModalOpen, removeWidget } =
        useStore();
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
        change,
    } = useTicker(assetKey);

    const asset = assets[assetKey];
    const changeColor = getChangeColor(change);

    return (
        <Widget
            isLoading={isLoading}
            isActive={!(!isFetching && !isError)}
            title={
                <Div display="flex" alignItems="center">
                    <Image
                        src={asset.img}
                        alt={asset.symbol}
                        height="1rem"
                        width="1rem"
                    />
                    <Text
                        color={asset.color}
                        lineHeight="1"
                        margin="0 0 0 0.25rem"
                        bold
                    >
                        {asset.label.toUpperCase()}
                    </Text>
                </Div>
            }
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
                <>
                    <Icon
                        onClick={() => removeWidget(assetKey)}
                        name="delete"
                        size="1rem"
                        color={asset.color}
                    />
                    <Icon
                        onClick={() => setModalOpen("alerts")}
                        name="notifications"
                        size="1rem"
                        color={asset.color}
                    />
                </>
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
                <LineChartContainer
                    display="flex"
                    alignItems="center"
                    opacity={isError ? 0 : 1}
                >
                    <LineChart
                        data={realTimeData?.changes.reverse()}
                        color={changeColor}
                    />
                    <Text
                        color={changeColor}
                        fontSize="0.75rem"
                        margin="0 0 0 0.5rem"
                    >
                        {`${formatChange(change)} %`}
                    </Text>
                </LineChartContainer>

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
