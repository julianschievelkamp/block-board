import { useState, useEffect } from "react";
import axios from "axios";

export const useFearGreed = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [data, setData] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            const isoDate = new Date(Date.now()).toISOString().slice(0, 10);
            const endpoint = `https://production.dataviz.cnn.io/index/fearandgreed/graphdata/${isoDate}`;

            await axios
                .get(endpoint)
                .then((res) => {
                    setData(res.data);
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
