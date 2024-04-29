import React, { useState } from "react";

import { Controls, HoverControls, StyledWidget } from "./styles";

import Div from "components/elements/div";
import Icon from "components/elements/icon";

import { AssetKey, WidgetKey } from "data/types";
import { useStore } from "data/store";
import { assets } from "data/data";

export interface WidgetProps {
    title: React.ReactNode;
    widgetKey: WidgetKey;
    children: React.ReactNode;
    controls?: React.ReactNode;
    hoverControls?: React.ReactNode;
    isLoading?: boolean;
    isActive?: boolean;
    className?: string;
}

const Widget = ({
    title,
    widgetKey,
    children,
    controls,
    hoverControls,
    isLoading = false,
    isActive = true,
    className,
}: WidgetProps) => {
    const [isHover, setIsHover] = useState(false);
    const { removeWidget } = useStore();

    return (
        <StyledWidget
            $isLoading={isLoading}
            $isActive={isActive}
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
                {title}

                <Controls>
                    <HoverControls $isHover={isHover}>
                        <Icon
                            onClick={() => removeWidget(widgetKey)}
                            name="delete"
                            size="1rem"
                            color={
                                assets[widgetKey as AssetKey]?.color ??
                                "darkgrey"
                            }
                        />

                        {hoverControls}
                    </HoverControls>

                    {controls}
                </Controls>
            </Div>

            {children}
        </StyledWidget>
    );
};

export default Widget;
