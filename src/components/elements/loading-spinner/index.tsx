import React from "react";

import { StyledLoadingSpinner } from "./styles";
import Text from "../text";

const LoadingSpinner = () => {
    return (
        <StyledLoadingSpinner>
            <Text>...loading</Text>
        </StyledLoadingSpinner>
    );
};

export default LoadingSpinner;
