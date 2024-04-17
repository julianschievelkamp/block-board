import { AssetKey, Asset } from "data/types";

export const assets: { [key in AssetKey]: Asset } = {
    BTC: {
        label: "Bitcoin",
        key: "BTC",
        symbol: "₿",
        color: "darkorange",
        api: "https://blockchain.info/ticker",
    },
    ETH: {
        label: "Ethereum",
        key: "ETH",
        symbol: "Ξ",
        color: "darkgrey",
        api: "https://blockchain.info/ticker",
    },
};
