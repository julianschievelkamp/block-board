import React from "react";

import Div from "components/layout/div";
import Card from "components/elements/card";

const App = () => {
    return (
        <Div display="flex">
            <Card initialAssetKey="BTC" initialCurrency="USD" />
            <Card initialAssetKey="ETH" initialCurrency="USD" />
        </Div>
    );
};

export default App;
