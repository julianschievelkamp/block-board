import { AssetKey, Asset } from "data/types";

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
};
