import { useState, useEffect, useContext } from "react";

import { AssetKey, Currency } from "data/types";
import { ExchangeContext } from "contexts/ExchangeContext";

export const useTicker = (
    initialAssetKey: AssetKey,
    initalCurrency: Currency
) => {
    const { data } = useContext(ExchangeContext);

    const [assetKey, setAssetKey] = useState<AssetKey>(initialAssetKey);
    const [currency, setCurrency] = useState<Currency>(initalCurrency);
    const [price, setPrice] = useState(0);

    useEffect(() => {
        const asset = data.find(
            (item: any) => item.symbol === assetKey + currency
        );

        setPrice(asset?.lastPrice ?? 0);
    }, [data]);

    return {
        price,
        assetKey,
        currency,
        setAssetKey,
        setCurrency,
    };
};
