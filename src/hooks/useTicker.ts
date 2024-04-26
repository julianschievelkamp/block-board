import { useState, useEffect } from "react";
import axios from "axios";

import { AssetKey, Currency, RealTimeData } from "data/types";
import { getRandomInteger } from "utils/helpers";
import { useStore } from "state/useStore";

export const useTicker = (assetKey: AssetKey) => {
    const { primaryCurrency } = useStore();

    const [refreshRate, setRefreshRate] = useState(
        getRandomInteger(4500, 5500)
    );
    const [isLoading, setIsLoading] = useState(true);
    const [isFetching, setIsFetching] = useState(true);
    const [isError, setIsError] = useState(false);
    const [currency, setCurrency] = useState<Currency>(primaryCurrency);
    const [realTimeData, setRealTimeData] = useState<
        RealTimeData | undefined
    >();
    const [lastUpdate, setLastUpdate] = useState(Date.now());

    useEffect(() => {
        let isMounted = true;

        if (isFetching) {
            const fetchData = async () => {
                const endpoint = `https://api.gemini.com/v2/ticker/${
                    assetKey + currency
                }`;

                while (isMounted) {
                    await axios
                        .get(endpoint)
                        .then((res) => {
                            setRealTimeData(res.data);
                            setIsError(false);
                        })
                        .catch(() => {
                            setIsError(true);
                            setIsFetching(false);
                        });

                    setLastUpdate(Date.now());
                    setIsLoading(false);

                    if (isError) return;

                    await new Promise((res) => setTimeout(res, refreshRate));
                }
            };

            fetchData();
        }

        return () => {
            isMounted = false;
        };
        // eslint-disable-next-line
    }, [currency, isFetching]);

    return {
        realTimeData,
        currency,
        setCurrency,
        refreshRate,
        isLoading,
        isFetching,
        setIsFetching,
        isError,
        lastUpdate,
    };
};
