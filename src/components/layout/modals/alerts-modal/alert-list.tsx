import { AlertCard, AlertChild } from "./styles";
import Div from "../../../elements/div";
import Text from "../../../elements/text";
import { formatPrice } from "utils/helpers";
import Icon from "../../../elements/icon";
import Image from "../../../elements/image";
import { assets } from "data/data";
import { AssetKey, PriceAlert } from "data/types";

export interface AlertListProps {
    alerts: PriceAlert[];
    isOpen: boolean;
    setIsOpen: () => void;
}

const AlertList = ({ alerts, isOpen, setIsOpen }: AlertListProps) => {
    const asset = assets[alerts[0].assetKey as AssetKey];

    return (
        <Div>
            <AlertCard onClick={setIsOpen}>
                <Div display="flex" alignItems="center">
                    <Image
                        src={asset.img}
                        alt={asset.symbol}
                        height="1rem"
                        width="1rem"
                    />
                    <Text
                        fontSize="0.75rem"
                        margin="0 0 0 0.25rem"
                        bold
                        color={asset.color}
                    >
                        {asset.assetKey}
                    </Text>
                </Div>

                <Text fontSize="0.75rem">{`${alerts.length} Price Alert${
                    alerts.length > 1 ? "s" : ""
                }`}</Text>

                <Icon name="arrowRight" />
            </AlertCard>

            {alerts.map((alert) => {
                return (
                    <AlertChild key={alert.timestamp_created}>
                        <Div display="flex" alignItems="center">
                            <Icon name="info" />
                            <Text fontSize="0.5rem" margin="0 0 0 0.25rem">
                                {new Date(
                                    alert.timestamp_reached
                                ).toLocaleString()}
                            </Text>
                        </Div>

                        <Text fontSize="0.75rem">
                            {formatPrice(alert.target, alert.currency)}
                        </Text>
                        <Icon name="delete" />
                    </AlertChild>
                );
            })}
        </Div>
    );
};

export default AlertList;
