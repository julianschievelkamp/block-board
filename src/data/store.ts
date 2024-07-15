import { create } from "zustand";

import { Currency, Modal, PriceAlert, WidgetKey } from "data/types";

interface State {
    primaryCurrency: Currency;
    secondaryCurrency: Currency;
    widgets: WidgetKey[];
    priceAlerts: PriceAlert[];
    modalOpen: Modal | null;
}

interface Actions {
    addWidget: (widget: WidgetKey) => void;
    removeWidget: (widget: WidgetKey) => void;
    addPriceAlert: (alert: PriceAlert) => void;
    removePriceAlert: (alert: PriceAlert) => void;
    setModalOpen: (modal: Modal | null) => void;
}

export const useStore = create<State & Actions>((set) => ({
    primaryCurrency: "USD",
    secondaryCurrency: "EUR",
    // DEBUG: add market data
    widgets: ["FearGreed", "BTC", "ETH", "DOGE"],
    // DEBUG: remove alerts
    priceAlerts: [
        {
            assetKey: "BTC",
            base: 70000,
            target: 65000,
            currency: "USD",
            timestamp_created: Date.now(),
            timestamp_reached: 0,
        },
        {
            assetKey: "BTC",
            base: 70000,
            target: 75000,
            currency: "USD",
            timestamp_created: Date.now() + 1,
            timestamp_reached: 0,
        },
        {
            assetKey: "ETH",
            base: 2000,
            target: 3000,
            currency: "USD",
            timestamp_created: Date.now() + 2,
            timestamp_reached: 0,
        },
    ],
    modalOpen: null,

    addWidget: (widget) =>
        set((state) => ({
            widgets: [...state.widgets, widget],
        })),

    removeWidget: (widget) =>
        set((state) => ({
            widgets: state.widgets.filter((item) => item !== widget),
        })),

    addPriceAlert: (alert) =>
        set((state) => ({
            priceAlerts: [...state.priceAlerts, alert].sort(
                ({ target: a }, { target: b }) => a - b
            ),
        })),

    removePriceAlert: (alert) =>
        set((state) => ({
            priceAlerts: state.priceAlerts.filter((item) => item !== alert),
        })),

    setModalOpen: (modal) =>
        set(() => ({
            modalOpen: modal,
        })),
}));
