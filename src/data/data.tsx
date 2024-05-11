import FearGreed from "components/layout/widgets/fear-greed";
import MarketData from "components/layout/widgets/market-data";

import { Asset, AssetKey, Other, OtherKey } from "./types";

import { lang } from "./lang";

import btc from "assets/img/btc.png";
import eth from "assets/img/eth.png";
import doge from "assets/img/doge.png";
import xrp from "assets/img/xrp.png";
import sol from "assets/img/sol.png";

export const assets: { [key in AssetKey]: Asset } = {
    BTC: {
        label: "Bitcoin",
        assetKey: "BTC",
        symbol: "₿",
        img: btc,
        color: "darkorange",
    },
    ETH: {
        label: "Ethereum",
        assetKey: "ETH",
        symbol: "Ξ",
        img: eth,
        color: "darkgrey",
    },
    DOGE: {
        label: "Doge",
        assetKey: "DOGE",
        symbol: "Ɖ",
        img: doge,
        color: "goldenrod",
    },
    XRP: {
        label: "Ripple",
        assetKey: "XRP",
        symbol: "X",
        img: xrp,
    },
    SOL: {
        label: "Solana",
        assetKey: "SOL",
        symbol: "S",
        img: sol,
    },
};

export const other: { [key in OtherKey]: Other } = {
    FearGreed: {
        label: lang.fearGreed,
        content: <FearGreed />,
    },
    MarketData: {
        label: lang.marketData,
        content: <MarketData />,
    },
};
