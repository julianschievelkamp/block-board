import React, { useState } from "react";

import { Content, Controls, HoverControls, StyledWidget } from "./styles";

import Div from "components/elements/div";
import Icon from "components/elements/icon";

import { AssetKey, WidgetKey } from "data/types";
import { useStore } from "data/store";
import { assets } from "data/data";

export interface WidgetProps {
    title: React.ReactNode;
    children: React.ReactNode;
    removeWidget: () => void;
    controls?: React.ReactNode;
    hoverControls?: React.ReactNode;
    isLoading?: boolean;
    isActive?: boolean;
    className?: string;
}

const Widget = ({
    title,
    children,
    removeWidget,
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
                <Content $isActive={isActive}>{title}</Content>

                <Controls>
                    <HoverControls $isHover={isHover}>
                        <Icon
                            onClick={removeWidget}
                            name="delete"
                            size="1rem"
                            color="darkgrey"
                        />

                        {hoverControls}
                    </HoverControls>

                    {controls}
                </Controls>
            </Div>

            <Content $isActive={isActive}>{children}</Content>
        </StyledWidget>
    );
};

export default Widget;
