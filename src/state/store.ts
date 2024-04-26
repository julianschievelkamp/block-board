import { create } from "zustand";

import { AssetKey, Currency } from "data/types";

interface State {
    primaryCurrency: Currency;
    secondaryCurrency: Currency;
    widgets: AssetKey[];
}

interface Actions {
    addWidget: (assetKey: AssetKey) => void;
    removeWidget: (assetKey: AssetKey) => void;
}

export const useStore = create<State & Actions>((set) => ({
    primaryCurrency: "USD",
    secondaryCurrency: "EUR",
    widgets: ["BTC", "ETH", "DOGE"],

    addWidget: (widget) =>
        set((state) => ({
            widgets: [...state.widgets, widget],
        })),

    removeWidget: (widget) =>
        set((state) => ({
            widgets: state.widgets.filter((item) => item !== widget),
        })),
}));
