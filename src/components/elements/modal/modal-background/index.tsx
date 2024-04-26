import React from "react";

import { StyledModalBackground } from "./styles";

export interface ModalBackgroundProps {
    onClick: () => void;
    isOpen: boolean;
}

const ModalBackground = ({ onClick, isOpen }: ModalBackgroundProps) => {
    return <StyledModalBackground $isOpen={isOpen} onClick={onClick} />;
};

export default ModalBackground;
