import styled from "styled-components";
import { borderRadius, shadow, transition } from "styles/variables";

import { Asset } from "data/types";

export const StyledCard = styled.div<{ asset: Asset }>`
    display: inline-block;
    position: relative;
    border-radius: ${borderRadius.edged};
    border: 1px solid ${({ asset }) => asset.color};
    background-color: ${({ asset }) => asset.color};
    transition: ${transition.fast};
    box-shadow: ${shadow.hard};
    padding: 1rem;
    margin: 0.5rem;

    &:hover {
        transform: translateY(-2px);
        box-shadow: ${shadow.soft};
    }
`;
