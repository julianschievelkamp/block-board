export type AssetKey = "BTC" | "ETH";

export type Asset = {
    label: string;
    key: AssetKey;
    symbol: string;
    color: string;
    api: string;
};
