import Text from "components/elements/text";
import Modal from "components/elements/modal";

export interface AddModalProps {
    onClose: () => void;
    isOpen: boolean;
}

const AddModal = ({ isOpen, onClose }: AddModalProps) => {
    return (
        <Modal title="Add Widget" isOpen={isOpen} onClose={onClose}>
            <Text>Text</Text>
        </Modal>
    );
};

export default AddModal;
