import Background from "components/elements/modal/background";
import { useStore } from "data/store";

const ModalBackground = () => {
    const { modalOpen, setModalOpen } = useStore();

    return (
        <Background
            onClick={() => setModalOpen(null)}
            isOpen={modalOpen !== null}
        />
    );
};

export default ModalBackground;
