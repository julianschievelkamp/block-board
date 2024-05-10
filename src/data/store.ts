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
    // DEBUG: remove alert
    priceAlerts: [
        {
            assetKey: "BTC",
            base: 70000,
            target: 65000,
            currency: "USD",
            created_at: Date.now(),
            reached_at: 0,
        },
        {
            assetKey: "BTC",
            base: 70000,
            target: 75000,
            currency: "USD",
            created_at: Date.now() + 1,
            reached_at: 0,
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
            priceAlerts: [...state.priceAlerts, alert],
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
