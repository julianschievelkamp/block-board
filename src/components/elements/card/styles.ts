import styled from "styled-components";
import { borderRadius, shadow, transition } from "styles/variables";
import RadialProgress from "components/elements/radial-progress";
import Icon from "components/elements/icon";

import { Asset } from "data/types";

export const StyledCard = styled.div<{ $asset: Asset }>`
    display: inline-block;
    position: relative;
    border-radius: ${borderRadius.edged};
    border: 1px solid ${({ $asset }) => $asset.color};
    background-color: ${({ $asset }) => $asset.color};
    transition: ${transition.fast};
    box-shadow: ${shadow.hard};
    padding: 1rem;
    margin: 0.5rem;

    &:hover {
        transform: translateY(-2px);
        box-shadow: ${shadow.soft};
    }
`;

export const StyledRadialProgress = styled(RadialProgress)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export const StyledIcon = styled(Icon)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;
