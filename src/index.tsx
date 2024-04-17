import React from "react";
import ReactDOM from "react-dom/client";

import Card from "components/elements/card";
import Div from "components/layout/div";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

root.render(
    <React.StrictMode>
        <Div display="flex">
            <Card initialAssetKey="BTC" initialCurrency="EUR" />
            <Card initialAssetKey="ETH" initialCurrency="EUR" />
        </Div>
    </React.StrictMode>
);
