import { useStore } from "state/useStore";

import ModalBackground from "components/elements/modal/modal-background";

const Background = () => {
    const modalOpen = useStore((state) => state.modalOpen);
    const setModalOpen = useStore((state) => state.setModalOpen);

    return (
        <ModalBackground
            onClick={() => setModalOpen(null)}
            isOpen={modalOpen !== null}
        />
    );
};

export default Background;
