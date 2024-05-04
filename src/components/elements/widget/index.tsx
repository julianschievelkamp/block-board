import React, { useState } from "react";

import {
    ContentOpacity,
    Controls,
    HoverControls,
    SpinnerContainer,
    StyledWidget,
} from "./styles";

import Div from "components/elements/div";
import LoadingSpinner from "components/elements/loading-spinner";

export interface WidgetProps {
    title: React.ReactNode;
    children: React.ReactNode;
    controls?: React.ReactNode;
    hoverControls?: React.ReactNode;
    isLoading?: boolean;
    isActive?: boolean;
}

const Widget = ({
    title,
    children,
    controls,
    hoverControls,
    isLoading = false,
    isActive = true,
}: WidgetProps) => {
    const [isHover, setIsHover] = useState(false);

    return (
        <Div
            height="100%"
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        >
            <SpinnerContainer $isLoading={isLoading}>
                <LoadingSpinner />
            </SpinnerContainer>
            <StyledWidget $isLoading={isLoading} $isHover={isHover}>
                <Div
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    margin="0 0 1rem 0"
                    height="1.5rem"
                >
                    <ContentOpacity $isActive={isActive}>
                        {title}
                    </ContentOpacity>

                    <Controls>
                        <HoverControls $isHover={isHover}>
                            {hoverControls}
                        </HoverControls>

                        {controls}
                    </Controls>
                </Div>

                <ContentOpacity $isActive={isActive}>{children}</ContentOpacity>
            </StyledWidget>
        </Div>
    );
};

export default Widget;
