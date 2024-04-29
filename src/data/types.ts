export type AssetKey = "BTC" | "ETH" | "DOGE" | "XRP" | "SOL";
export type OtherKey = "FearGreed";
export type WidgetKey = AssetKey | OtherKey;

export type Currency = "USD" | "EUR";
export type Modal = "add" | "alerts";

export type Asset = {
    label: string;
    key: AssetKey;
    symbol: string;
    color: string;
};

export type Other = {
    label: string;
    content: React.ReactNode;
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
