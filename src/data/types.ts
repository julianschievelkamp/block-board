export type AssetKey = "BTC" | "ETH";
export type Currency = "EUR" | "USD";

export type Asset = {
    label: string;
    key: AssetKey;
    symbol: string;
    color: string;
};
