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
    widgets: ["FearGreed", "BTC", "ETH", "DOGE"],
    priceAlerts: [],
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
