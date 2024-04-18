export type AssetKey = "BTC" | "ETH";
export type Currency = "USD" | "EUR";

export type Asset = {
    label: string;
    key: AssetKey;
    symbol: string;
    color: string;
};
