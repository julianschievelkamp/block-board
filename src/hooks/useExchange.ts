import { useState, useEffect } from "react";

import axios from "axios";

const sleep = (n: number) => new Promise((res) => setTimeout(res, n));

export const useExchange = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchPrice = async () => {
            const endpoint = "https://api4.binance.com/api/v3/ticker/24hr";

            while (true) {
                axios.get(endpoint).then((res) => {
                    setData(res.data);
                });

                await sleep(5000);
            }
        };

        fetchPrice();
    }, []);

    return { data };
};
