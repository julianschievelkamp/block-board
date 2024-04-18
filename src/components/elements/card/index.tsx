import React from "react";
import { StyledCard } from "./styles";

export interface CardProps {
    bgColor: string;
    children: React.ReactNode;
}

const Card = ({ children, bgColor }: CardProps) => {
    return <StyledCard $bgColor={bgColor}>{children}</StyledCard>;
};

export default Card;
