import FearGreed from "components/layout/widgets/fear-greed";
import { Asset, AssetKey, Other, OtherKey } from "./types";

import btc from "assets/img/btc.png";
import eth from "assets/img/eth.png";
import doge from "assets/img/doge.png";
import xrp from "assets/img/xrp.png";
import sol from "assets/img/sol.png";

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
        img: btc,
        color: "darkorange",
    },
    ETH: {
        label: "Ethereum",
        key: "ETH",
        symbol: "Ξ",
        img: eth,
        color: "silver",
    },
    DOGE: {
        label: "Doge",
        key: "DOGE",
        symbol: "Ɖ",
        img: doge,
        color: "goldenrod",
    },
    XRP: {
        label: "Ripple",
        key: "XRP",
        symbol: "X",
        img: xrp,
        color: "darkgrey",
    },
    SOL: {
        label: "Solana",
        key: "SOL",
        symbol: "S",
        img: sol,
        color: "mediumorchid",
    },
};

export const other: { [key in OtherKey]: Other } = {
    FearGreed: {
        label: lang.fearGreed,
        content: <FearGreed />,
    },
};
