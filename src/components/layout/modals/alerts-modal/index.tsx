import Modal from "components/elements/modal";
import { lang } from "data/lang";
import { useStore } from "data/store";
import Button from "components/elements/button";
import Div from "components/elements/div";
import { assets } from "data/data";
import AlertList from "components/layout/modals/alerts-modal/alert-list";
import { useState } from "react";

const AlertsModal = () => {
    const { priceAlerts, modalOpen, setModalOpen } = useStore();
    const [listOpen, setListOpen] = useState(0);

    return (
        <Modal
            title={lang.priceAlerts}
            isOpen={modalOpen === "alerts"}
            onClose={() => setModalOpen(null)}
        >
            {Object.keys(assets).map((key, index) => {
                const alerts = priceAlerts.filter(
                    (alert) => alert.assetKey === key
                );

                return (
                    alerts.length !== 0 && (
                        <AlertList
                            key={key}
                            alerts={alerts}
                            isOpen={index === listOpen}
                            setIsOpen={() => setListOpen(index)}
                        />
                    )
                );
            })}

            <Div margin="1rem 0 0 0" display="flex" justifyContent="flex-end">
                <Button iconName="add" onClick={() => {}} />
            </Div>
        </Modal>
    );
};

export default AlertsModal;
