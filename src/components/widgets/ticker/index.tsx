import Text from "components/elements/text";
import Div from "components/elements/div";
import Widget from "components/elements/widget";
import Switch from "components/elements/switch";
import LineChart from "components/elements/line-chart";
import RadialTimer from "components/elements/radial-timer";
import Icon from "components/elements/icon";

import { assets } from "data/assets";
import { useTicker } from "hooks/useTicker";
import { AssetKey, Currency } from "data/types";

import { lang } from "data/constants";

import Price from "./price";
import { Controls, HoverControls } from "./styles";
import { useState } from "react";
import { useStore } from "state/store";

export interface TickerProps {
    assetKey: AssetKey;
}

const Ticker = ({ assetKey }: TickerProps) => {
    const { removeWidget } = useStore();
    const [isHover, setIsHover] = useState(false);
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
            isLoading={isLoading}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        >
            <Div
                display="flex"
                alignItems="center"
                justifyContent="space-between"
            >
                <Text color={asset.color} fontSize="1rem" lineHeight="1" bold>
                    {`${asset.symbol} ${asset.label.toUpperCase()}`}
                </Text>

                <Controls>
                    <HoverControls $isHover={isHover}>
                        <Icon
                            onClick={() => removeWidget(asset.key)}
                            name="delete"
                            size="1rem"
                            color={asset.color}
                        />
                        <Icon
                            onClick={() => {}}
                            name="notifications"
                            size="1rem"
                            color={asset.color}
                        />
                    </HoverControls>

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
                </Controls>
            </Div>

            <Price value={realTimeData?.ask} currency={currency} />

            <Div
                display="flex"
                justifyContent="space-between"
                alignItems="flex-end"
            >
                <Div display="flex" alignItems="center">
                    <LineChart data={realTimeData?.changes} />
                    <Text
                        color={
                            realTimeData &&
                            (realTimeData.open < realTimeData.close
                                ? "green"
                                : "red")
                        }
                        fontSize="0.75rem"
                        margin="0 0 0 0.5rem"
                    >
                        + 0,00 %
                    </Text>
                </Div>

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
