import React, { useState } from "react";

import { Controls, HoverControls, StyledWidget } from "./styles";

import Div from "components/elements/div";
import Text from "components/elements/text";
import Icon from "../icon";
import { WidgetKey } from "data/types";
import { useStore } from "state/useStore";

export interface WidgetProps {
    title: string;
    widgetKey: WidgetKey;
    children: React.ReactNode;
    controls?: React.ReactNode;
    hoverControls?: React.ReactNode;
    color?: string;
    isLoading?: boolean;
    className?: string;
}

const Widget = ({
    title,
    widgetKey,
    children,
    color,
    controls,
    hoverControls,
    isLoading = false,
    className,
}: WidgetProps) => {
    const [isHover, setIsHover] = useState(false);
    const { removeWidget } = useStore();

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
                <Text color={color} fontSize="1rem" lineHeight="1" bold>
                    {title}
                </Text>

                <Controls>
                    <HoverControls $isHover={isHover}>
                        {hoverControls}

                        <Icon
                            onClick={() => removeWidget(widgetKey)}
                            name="delete"
                            size="1rem"
                            color={color}
                        />
                    </HoverControls>

                    {controls}
                </Controls>
            </Div>

            {children}
        </StyledWidget>
    );
};

export default Widget;
