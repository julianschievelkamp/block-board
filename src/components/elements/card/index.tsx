import React from "react";
import { StyledCard } from "./styles";

export interface CardProps {
    bgColor: string;
    children: React.ReactNode;
    className?: string;
}

const Card = ({ children, bgColor, className }: CardProps) => {
    return (
        <StyledCard $bgColor={bgColor} className={className}>
            {children}
        </StyledCard>
    );
};

export default Card;
