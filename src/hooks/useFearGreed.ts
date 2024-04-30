import { useState, useEffect } from "react";
import axios from "axios";

export const useFearGreed = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [data, setData] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            const endpoint = `https://api.alternative.me/fng/`;

            await axios
                .get(endpoint)
                .then((res) => {
                    setData(res.data.data[0]);
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
