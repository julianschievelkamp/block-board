import Background from "components/elements/modal/background";

export interface ModalBackgroundProps {
    onClick: () => void;
    isOpen: boolean;
}

const ModalBackground = ({ isOpen, onClick }: ModalBackgroundProps) => {
    return <Background onClick={onClick} isOpen={isOpen} />;
};

export default ModalBackground;
