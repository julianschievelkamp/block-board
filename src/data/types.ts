export type AssetKey = "BTC" | "ETH";
export type Currency = "USD" | "EUR";

export type Asset = {
    label: string;
    key: AssetKey;
    symbol: string;
    color: string;
};

export type RealTimeData = {
    ask: number;
    bid: number;
    changes: number[];
    close: number;
    high: number;
    low: number;
    open: number;
    symbol: string;
};
