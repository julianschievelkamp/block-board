import Text from "components/elements/text";

import { useStore } from "state/useStore";
import Modal from "components/elements/modal";

const AlertsModal = () => {
    const modalOpen = useStore((state) => state.modalOpen);
    const setModalOpen = useStore((state) => state.setModalOpen);

    return (
        <Modal
            title="Price Alerts"
            isOpen={modalOpen === "alerts"}
            onClose={() => setModalOpen(null)}
        >
            <Text>Text</Text>
        </Modal>
    );
};

export default AlertsModal;
