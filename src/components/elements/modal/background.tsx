import { StyledBackground } from "./styles";

export interface BackgroundProps {
    onClick: () => void;
    isOpen: boolean;
}

const Background = ({ onClick, isOpen }: BackgroundProps) => {
    return <StyledBackground $isOpen={isOpen} onClick={onClick} />;
};

export default Background;
