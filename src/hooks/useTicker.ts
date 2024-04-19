import { useState, useEffect } from "react";
import axios from "axios";

import { AssetKey, Currency, RealTimeData } from "data/types";

export const useTicker = (assetKey: AssetKey, initalCurrency: Currency) => {
    const [currency, setCurrency] = useState<Currency>(initalCurrency);
    const [realTimeData, setRealTimeData] = useState<
        RealTimeData | undefined
    >();
    const [refreshRate, setRefreshRate] = useState(5000);

    useEffect(() => {
        let isFetching = true;

        const fetchData = async () => {
            const endpoint = `https://api.gemini.com/v2/ticker/${
                assetKey + currency
            }`;

            while (isFetching) {
                await axios.get(endpoint).then((res) => {
                    // console.log(res.data);

                    setRealTimeData(res.data);
                });

                await new Promise((res) => setTimeout(res, refreshRate));
            }
        };

        fetchData();

        return () => {
            isFetching = false;
        };
    }, [assetKey, currency, refreshRate]);

    return {
        realTimeData,
        currency,
        setCurrency,
        refreshRate,
        setRefreshRate,
    };
};
