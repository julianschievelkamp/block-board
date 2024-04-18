import { useState, useEffect } from "react";

import { AssetKey, Currency } from "data/types";
import axios from "axios";

export const useTicker = (
    initialAssetKey: AssetKey,
    initalCurrency: Currency
) => {
    const [assetKey, setAssetKey] = useState<AssetKey>(initialAssetKey);
    const [currency, setCurrency] = useState<Currency>(initalCurrency);
    const [price, setPrice] = useState(0);

    useEffect(() => {
        const fetchPrice = async () => {
            const endpoint = `https://api.gemini.com/v2/ticker/${
                assetKey + currency
            }`;

            while (true) {
                axios.get(endpoint).then((res) => {
                    setPrice(res.data.ask ?? 0);
                });

                await new Promise((res) => setTimeout(res, 5000));
            }
        };

        fetchPrice();
    }, [assetKey, currency]);

    return {
        price,
        assetKey,
        currency,
        setAssetKey,
        setCurrency,
    };
};
