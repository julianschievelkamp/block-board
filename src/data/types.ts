export type AssetKey = "BTC" | "ETH" | "DOGE" | "XRP" | "SOL";
export type OtherKey = "FearGreed" | "MarketData";
export type WidgetKey = AssetKey | OtherKey;

export type Currency = "USD" | "EUR";
export type Modal = "add" | "alerts";

export type Asset = {
    label: string;
    assetKey: AssetKey;
    symbol: string;
    img: string;
    color?: string;
};

export type Other = {
    label: string;
    content: React.ReactNode;
};

export type PriceAlert = {
    assetKey: AssetKey;
    base: number;
    target: number;
    currency: Currency;
    timestamp_created: number;
    timestamp_reached: number;
};

export type FearGreedData = {
    value: number;
    value_classification: string;
    timestamp: number;
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

export type Vertex = {
    x: number;
    y: number;
};

export type Theme = {
    primary: string;
    secondary: string;
    body: string;
    menu: string;
    text: string;
    icon: string;
    border: string;
    hover: string;
    inputScheme: string;
};
