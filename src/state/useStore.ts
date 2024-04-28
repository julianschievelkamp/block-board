import { create } from "zustand";

import { Currency, WidgetKey } from "data/types";

interface State {
    primaryCurrency: Currency;
    secondaryCurrency: Currency;
    widgets: WidgetKey[];
}

interface Actions {
    addWidget: (widget: WidgetKey) => void;
    removeWidget: (widget: WidgetKey) => void;
}

export const useStore = create<State & Actions>((set) => ({
    primaryCurrency: "USD",
    secondaryCurrency: "EUR",
    widgets: ["BTC", "ETH", "DOGE", "FearGreed"],

    addWidget: (widget) =>
        set((state) => ({
            widgets: [...state.widgets, widget],
        })),

    removeWidget: (widget) =>
        set((state) => ({
            widgets: state.widgets.filter((item) => item !== widget),
        })),
}));
