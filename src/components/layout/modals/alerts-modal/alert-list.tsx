import {
    AlertCard,
    AlertChild,
    Circle,
    Container,
    HiddenList,
    LineContainer,
    StyledIcon,
} from "./styles";
import Div from "../../../elements/div";
import Text from "../../../elements/text";
import { formatPrice } from "utils/helpers";
import Icon from "../../../elements/icon";
import Image from "../../../elements/image";
import { assets } from "data/data";
import { AssetKey, PriceAlert } from "data/types";
import { lang } from "data/lang";
import { useMediaQuery } from "hooks/general/useMediaQuery";
import { queries } from "styles/variables";

export interface AlertListProps {
    alerts: PriceAlert[];
    isOpen: boolean;
    setIsOpen: () => void;
}

const AlertList = ({ alerts, isOpen, setIsOpen }: AlertListProps) => {
    const asset = assets[alerts[0].assetKey as AssetKey];
    const isSm = useMediaQuery(queries.sm);

    return (
        <Container>
            <AlertCard onClick={setIsOpen} $isOpen={isOpen}>
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

                <Text fontSize="0.75rem">{lang.alertCount(alerts.length)}</Text>

                <StyledIcon name="expand" $isOpen={isOpen} />
            </AlertCard>

            <HiddenList $isOpen={isOpen}>
                {alerts.map((alert) => {
                    return (
                        <Div
                            display="flex"
                            alignItems="center"
                            margin="0.5rem 0 0 0"
                        >
                            <Div width="4rem" height="100%">
                                <LineContainer />
                                <Circle />
                            </Div>
                            <AlertChild key={alert.timestamp_created}>
                                {isSm && (
                                    <Text
                                        fontSize="0.75rem"
                                        margin="0 0 0 0.25rem"
                                        color="darkgrey"
                                    >
                                        {new Date(
                                            alert.timestamp_reached
                                        ).toLocaleString()}
                                    </Text>
                                )}

                                <Text fontSize="0.75rem">
                                    {formatPrice(alert.target, alert.currency)}
                                </Text>

                                <Div display="flex" alignItems="center">
                                    <Icon
                                        name="delete"
                                        margin="0 0 0 0.25rem"
                                    />
                                    <Icon
                                        name="restart"
                                        margin="0 0 0 0.25rem"
                                    />
                                </Div>
                            </AlertChild>
                        </Div>
                    );
                })}
            </HiddenList>
        </Container>
    );
};

export default AlertList;
