import styled from "styled-components";

import RadialTimer from "components/elements/radial-timer";
import Icon from "components/elements/icon";
import Card from "components/elements/card";
import { transition } from "styles/variables";

export const StyledCard = styled(Card)<{ isLoading: boolean }>`
    opacity: ${({ isLoading }) => (isLoading ? 0 : 1)};
    transition: ${transition.slow};
`;

export const StyledRadialTimer = styled(RadialTimer)`
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
