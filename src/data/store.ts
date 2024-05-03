import { create } from "zustand";

import { Currency, Modal, WidgetKey } from "data/types";

interface State {
    primaryCurrency: Currency;
    secondaryCurrency: Currency;
    widgets: WidgetKey[];
    modalOpen: Modal | null;
}

interface Actions {
    addWidget: (widget: WidgetKey) => void;
    removeWidget: (widget: WidgetKey) => void;
    setModalOpen: (modal: Modal | null) => void;
}

export const useStore = create<State & Actions>((set) => ({
    primaryCurrency: "USD",
    secondaryCurrency: "EUR",
    widgets: ["BTC", "ETH", "DOGE", "FearGreed"],
    modalOpen: null,

    addWidget: (widget) =>
        set((state) => ({
            widgets: [...state.widgets, widget],
        })),

    removeWidget: (widget) =>
        set((state) => ({
            widgets: state.widgets.filter((item) => item !== widget),
        })),

    setModalOpen: (modal) =>
        set(() => ({
            modalOpen: modal,
        })),
}));
