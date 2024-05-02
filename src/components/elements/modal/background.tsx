import { useEffect } from "react";
import { StyledBackground } from "./styles";

export interface BackgroundProps {
    onClick: () => void;
    isOpen: boolean;
}

const Background = ({ onClick, isOpen }: BackgroundProps) => {
    useEffect(() => {
        if (isOpen) {
            document.body.classList.add("no-scroll");
        } else {
            document.body.classList.remove("no-scroll");
        }
    }, [isOpen]);

    return <StyledBackground $isOpen={isOpen} onClick={onClick} />;
};

export default Background;
