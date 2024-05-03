import Text from "components/elements/text";
import Modal from "components/elements/modal";
import { lang } from "data/lang";
import { useStore } from "data/store";

const AlertsModal = () => {
    const { modalOpen, setModalOpen } = useStore();

    return (
        <Modal
            title={lang.priceAlerts}
            isOpen={modalOpen === "alerts"}
            onClose={() => setModalOpen(null)}
        >
            <Text>Text</Text>
        </Modal>
    );
};

export default AlertsModal;
