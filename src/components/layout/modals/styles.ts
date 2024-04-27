import styled from "styled-components";
import Card from "components/elements/card";

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1rem;
`;

export const StyledCard = styled(Card)<{ color?: string }>`
    border-color: ${({ color }) => color};
`;
