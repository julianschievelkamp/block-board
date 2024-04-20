import React from "react";
import { StyledWidget } from "./styles";

export interface WidgetProps {
    bgColor: string;
    children: React.ReactNode;
    isLoading?: boolean;
    className?: string;
}

const Widget = ({
    children,
    bgColor,
    isLoading = false,
    className,
}: WidgetProps) => {
    return (
        <StyledWidget
            $bgColor={bgColor}
            $isLoading={isLoading}
            className={className}
        >
            {children}
        </StyledWidget>
    );
};

export default Widget;
