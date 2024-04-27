import Text from "components/elements/text";
import Modal from "components/elements/modal";

export interface AlertsModalProps {
    onClose: () => void;
    isOpen: boolean;
}

const AlertsModal = ({ isOpen, onClose }: AlertsModalProps) => {
    return (
        <Modal title="Price Alerts" isOpen={isOpen} onClose={onClose}>
            <Text>Text</Text>
        </Modal>
    );
};

export default AlertsModal;
