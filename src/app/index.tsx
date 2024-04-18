import React from "react";

import Div from "components/elements/div";
import Ticker from "components/widgets/ticker";

const App = () => {
    return (
        <Div display="flex" margin="0.5rem">
            <Ticker initialAssetKey="BTC" initialCurrency="USD" />
            <Ticker initialAssetKey="ETH" initialCurrency="USD" />
        </Div>
    );
};

export default App;
