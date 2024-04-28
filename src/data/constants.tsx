import FearGreed from "components/layout/widgets/fear-greed";
import { Asset, AssetKey, Other, OtherKey } from "./types";

export const lang = {
    title: "Block Board",
    intro: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    darkTheme: "Dark Theme",
    lightTheme: "Light Theme",
    priceAlerts: "Price Alerts",
    addWidget: "Add Widget",
    lastUpdate: (time: string) => `Last Update: ${time}`,
    error: "Service unavailable",
    api: "Source: api.gemini.com",
    fearGreed: "Fear & Greed Index",
};

export const assets: { [key in AssetKey]: Asset } = {
    BTC: {
        label: "Bitcoin",
        key: "BTC",
        symbol: "₿",
        color: "darkorange",
    },
    ETH: {
        label: "Ethereum",
        key: "ETH",
        symbol: "Ξ",
        color: "silver",
    },
    DOGE: {
        label: "Doge",
        key: "DOGE",
        symbol: "Ɖ",
        color: "goldenrod",
    },
};

export const other: { [key in OtherKey]: Other } = {
    FearGreed: {
        label: lang.fearGreed,
        content: <FearGreed />,
    },
};
