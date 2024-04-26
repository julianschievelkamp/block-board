import React from "react";

import Text from "components/elements/text";
import Div from "components/elements/div";

import { ModalContainer, Window, StyledIcon } from "./styles";

export interface ModalProps {
    title: string;
    children: React.ReactNode;
    onClose: () => void;
    isOpen: boolean;
    className?: string;
}

const Modal = ({ title, children, isOpen, onClose, className }: ModalProps) => {
    return (
        <ModalContainer $isOpen={isOpen} className={className}>
            <Window $isOpen={isOpen}>
                <Text bold margin="0 0 1rem 0">
                    {title}
                </Text>
                <StyledIcon name="close" size="1.5rem" onClick={onClose} />
                <Div>{children}</Div>
            </Window>
        </ModalContainer>
    );
};

export default Modal;
