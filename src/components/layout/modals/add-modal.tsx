import Text from "components/elements/text";

import { useStore } from "state/useStore";
import Modal from "components/elements/modal";

const AddModal = () => {
    const modalOpen = useStore((state) => state.modalOpen);
    const setModalOpen = useStore((state) => state.setModalOpen);

    return (
        <Modal
            title="Add Widget"
            isOpen={modalOpen === "add"}
            onClose={() => setModalOpen(null)}
        >
            <Text>Text</Text>
        </Modal>
    );
};

export default AddModal;
