import React from "react";

import Text from "components/elements/text";

import { ModalContainer, Window, StyledIcon, ScrollContainer } from "./styles";

export interface ModalProps {
    title: string;
    children: React.ReactNode;
    onClose: () => void;
    isOpen: boolean;
}

const Modal = ({ title, children, isOpen, onClose }: ModalProps) => {
    return (
        <ModalContainer $isOpen={isOpen}>
            <Window $isOpen={isOpen}>
                <Text bold margin="0 0 0.5rem 0">
                    {title}
                </Text>

                <StyledIcon name="close" size="1.5rem" onClick={onClose} />
                <ScrollContainer>{children}</ScrollContainer>
            </Window>
        </ModalContainer>
    );
};

export default Modal;
