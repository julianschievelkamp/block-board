import { useState, useEffect } from "react";

import { assets } from "data/assets";
import { AssetKey, Currency } from "data/types";
import axios from "axios";

export const useTicker = (
    initialAssetKey: AssetKey,
    initalCurrency: Currency
) => {
    const [assetKey, setAssetKey] = useState<AssetKey>(initialAssetKey);
    const [currency, setCurrency] = useState<Currency>(initalCurrency);
    const [price, setPrice] = useState(0);
    const [refreshRate, setRefreshRate] = useState(2000);

    useEffect(() => {
        const fetchPrice = async () => {
            const endpoint = assets[assetKey].api;

            axios.get(endpoint).then((res) => {
                const rate = assetKey + currency;

                const asset = res.data.find(
                    (item: any) => item.symbol === rate
                );

                setPrice(asset.lastPrice);
            });
        };

        const interval = setInterval(() => fetchPrice(), refreshRate);

        return () => clearInterval(interval);
    }, [assetKey, currency, refreshRate]);

    return {
        price,
        assetKey,
        currency,
        setAssetKey,
        setCurrency,
        setRefreshRate,
    };
};
