import { useState, useEffect } from "react";
import axios from "axios";
import { FearGreedData } from "data/types";

export const useFearGreed = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [data, setData] = useState<FearGreedData[] | undefined>();

    useEffect(() => {
        const fetchData = async () => {
            const endpoint = `https://api.alternative.me/fng/?limit=5`;

            await axios
                .get(endpoint)
                .then((res) => {
                    setData(res.data.data);
                })
                .catch(() => {
                    setIsError(true);
                });

            setIsLoading(false);
        };

        fetchData();
    }, []);

    return {
        data,
        isLoading,
        isError,
    };
};
