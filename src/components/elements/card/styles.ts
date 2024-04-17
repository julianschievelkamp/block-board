import styled from "styled-components";
import { borderRadius, transition } from "styles/variables";

import { Asset } from "data/types";

export const StyledCard = styled.div<{asset: Asset}>`
    display: inline-block;
    position: relative;
    border-radius: ${borderRadius.edged};
    border: 1px solid ${({asset}) => asset.color};
    background-color: ${({asset}) => asset.color};
    transition: ${transition.fast};
    padding: 1rem;
`;
