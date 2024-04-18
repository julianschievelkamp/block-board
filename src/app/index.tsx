import React from "react";

import Div from "components/layout/div";
import Ticker from "components/widgets/ticker";

const App = () => {
    return (
        <Div display="flex">
            <Ticker initialAssetKey="BTC" initialCurrency="USD" />
            <Ticker initialAssetKey="ETH" initialCurrency="USD" />
        </Div>
    );
};

export default App;
