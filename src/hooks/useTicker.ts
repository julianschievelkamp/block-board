import { useState, useEffect } from "react";
import axios from "axios";

import { AssetKey, Currency, RealTimeData } from "data/types";

export const useTicker = (assetKey: AssetKey, initalCurrency: Currency) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isFetching, setIsFetching] = useState(true);
    const [currency, setCurrency] = useState<Currency>(initalCurrency);
    const [realTimeData, setRealTimeData] = useState<
        RealTimeData | undefined
    >();

    const refreshRate = 5000;

    useEffect(() => {
        let isMounted = true;

        if (isFetching) {
            const fetchData = async () => {
                const endpoint = `https://api.gemini.com/v2/ticker/${
                    assetKey + currency
                }`;

                while (isMounted) {
                    await axios.get(endpoint).then((res) => {
                        // console.log(res.data);

                        setRealTimeData(res.data);
                        setIsLoading(false);
                    });

                    await new Promise((res) => setTimeout(res, refreshRate));
                }
            };

            fetchData();
        }

        return () => {
            isMounted = false;
        };
    }, [assetKey, currency, isFetching]);

    return {
        realTimeData,
        currency,
        setCurrency,
        refreshRate,
        isLoading,
        isFetching,
        setIsFetching,
    };
};
