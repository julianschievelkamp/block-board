import React from "react";
import { StyledWidget } from "./styles";

export interface WidgetProps {
    children: React.ReactNode;
    isLoading?: boolean;
    className?: string;
}

const Widget = ({ children, isLoading = false, className }: WidgetProps) => {
    return (
        <StyledWidget $isLoading={isLoading} className={className}>
            {children}
        </StyledWidget>
    );
};

export default Widget;
