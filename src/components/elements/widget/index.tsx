import React, { useState } from "react";

import {
    ContentOpacity,
    Controls,
    HoverControls,
    StyledWidget,
} from "./styles";

import Div from "components/elements/div";

export interface WidgetProps {
    title: React.ReactNode;
    children: React.ReactNode;
    controls?: React.ReactNode;
    hoverControls?: React.ReactNode;
    isLoading?: boolean;
    isActive?: boolean;
    className?: string;
}

const Widget = ({
    title,
    children,
    controls,
    hoverControls,
    isLoading = false,
    isActive = true,
    className,
}: WidgetProps) => {
    const [isHover, setIsHover] = useState(false);

    return (
        <StyledWidget
            $isLoading={isLoading}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            className={className}
        >
            <Div
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                margin="0 0 1rem 0"
                height="1.5rem"
            >
                <ContentOpacity $isActive={isActive}>{title}</ContentOpacity>

                <Controls>
                    <HoverControls $isHover={isHover}>
                        {hoverControls}
                    </HoverControls>

                    {controls}
                </Controls>
            </Div>

            <ContentOpacity $isActive={isActive}>{children}</ContentOpacity>
        </StyledWidget>
    );
};

export default Widget;
