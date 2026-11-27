import type { ReactNode } from "react";

import { StyledHeadline } from "./Headline.styles";

interface HeadlineProps {
    children: ReactNode;
    type?: "h1" | "h2";
}

const Headline = ({ children, type = "h1" }: HeadlineProps) => (
    <StyledHeadline as={type}>{children}</StyledHeadline>
);

export default Headline;
