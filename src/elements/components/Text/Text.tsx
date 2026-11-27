import type { ReactNode } from "react";

import { StyledText } from "./Text.styles";

interface TextProps {
    children?: ReactNode;
    className?: string;
}

const Text = ({ children, className }: TextProps) => (
    <StyledText className={className}>{children}</StyledText>
);

export default Text;
