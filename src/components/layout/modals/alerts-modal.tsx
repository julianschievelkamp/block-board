import Text from "components/elements/text";
import Modal from "components/elements/modal";
import { lang } from "data/lang";
import { useStore } from "data/store";
import Button from "components/elements/button";
import { ListElement } from "./styles";
import Div from "components/elements/div";
import Icon from "components/elements/icon";
import { formatPrice } from "utils/helpers";
import Image from "components/elements/image";
import { assets } from "data/data";

const AlertsModal = () => {
    const { priceAlerts, modalOpen, setModalOpen } = useStore();

    return (
        <Modal
            title={lang.priceAlerts}
            isOpen={modalOpen === "alerts"}
            onClose={() => setModalOpen(null)}
        >
            {priceAlerts.map((alert) => {
                const asset = assets[alert.assetKey];

                return (
                    <ListElement key={alert.created_at}>
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
                                {alert.assetKey}
                            </Text>
                        </Div>

                        <Text fontSize="0.75rem">
                            {formatPrice(alert.target, alert.currency)}
                        </Text>
                        <Icon name="delete" size="1rem" />
                    </ListElement>
                );
            })}

            <Div margin="1rem 0 0 0" display="flex" justifyContent="flex-end">
                <Button iconName="add" onClick={() => {}} />
            </Div>
        </Modal>
    );
};

export default AlertsModal;
