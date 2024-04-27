import React from "react";
import { StyledCard } from "./styles";

export interface CardProps {
    children: React.ReactNode;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
    onClick?: () => void;
    isLoading?: boolean;
    className?: string;
}

const Card = ({
    children,
    isLoading = false,
    onMouseEnter,
    onMouseLeave,
    onClick,
    className,
}: CardProps) => {
    return (
        <StyledCard
            $isLoading={isLoading}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={onClick}
            className={className}
        >
            {children}
        </StyledCard>
    );
};

export default Card;
