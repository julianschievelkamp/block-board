import React from "react";
import { StyledWidget } from "./styles";

export interface WidgetProps {
    children: React.ReactNode;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
    isLoading?: boolean;
    className?: string;
}

const Widget = ({
    children,
    isLoading = false,
    onMouseEnter,
    onMouseLeave,
    className,
}: WidgetProps) => {
    return (
        <StyledWidget
            $isLoading={isLoading}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className={className}
        >
            {children}
        </StyledWidget>
    );
};

export default Widget;
