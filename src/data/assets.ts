import { AssetKey, Asset } from "data/types";

export const assets: { [key in AssetKey]: Asset } = {
    BTC: {
        label: "Bitcoin",
        key: "BTC",
        symbol: "₿",
        color: "darkorange",
        api: "https://api4.binance.com/api/v3/ticker/24hr",
    },
    ETH: {
        label: "Ethereum",
        key: "ETH",
        symbol: "Ξ",
        color: "darkgrey",
        api: "https://api4.binance.com/api/v3/ticker/24hr",
    },
};
