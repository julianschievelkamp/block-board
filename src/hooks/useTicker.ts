import { useState, useEffect } from "react";
import axios from "axios";

import { AssetKey, Currency } from "data/types";

export const useTicker = (
    initialAssetKey: AssetKey,
    initalCurrency: Currency
) => {
    const [assetKey, setAssetKey] = useState<AssetKey>(initialAssetKey);
    const [currency, setCurrency] = useState<Currency>(initalCurrency);
    const [price, setPrice] = useState(0);
    const [priceChange, setPriceChange] = useState(0);

    const updatePrice = (value: number) => {
        let change = 0;

        if (value > price) {
            setPriceChange(1);
        } else if (value < price) {
            setPriceChange(-1);
        }

        setPrice(value);
        setPriceChange(change);
    };

    useEffect(() => {
        const fetchPrice = async () => {
            const endpoint = `https://api.gemini.com/v2/ticker/${
                assetKey + currency
            }`;

            while (true) {
                await axios
                    .get(endpoint)
                    .then((res) => updatePrice(res.data.ask));
                await new Promise((res) => setTimeout(res, 5000));
            }
        };

        fetchPrice();
    }, [assetKey, currency]);

    return {
        price,
        priceChange,
        assetKey,
        currency,
        setAssetKey,
        setCurrency,
    };
};
