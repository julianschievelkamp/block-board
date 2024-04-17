import React from "react";

import Div from "components/layout/div";
import Card from "components/elements/card";
import { ExchangeContext } from "contexts/ExchangeContext";
import { useExchange } from "hooks/useExchange";

const App = () => {
    const { data } = useExchange();

    return (
        <ExchangeContext.Provider value={{ data }}>
            <Div display="flex">
                <Card initialAssetKey="BTC" initialCurrency="EUR" />
                <Card initialAssetKey="ETH" initialCurrency="EUR" />
            </Div>
        </ExchangeContext.Provider>
    );
};

export default App;
