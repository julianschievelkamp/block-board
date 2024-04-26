import { create } from "zustand";

import { AssetKey, Currency, Modal } from "data/types";

interface State {
    primaryCurrency: Currency;
    secondaryCurrency: Currency;
    widgets: AssetKey[];
    modalOpen: Modal | null;
}

interface Actions {
    addWidget: (assetKey: AssetKey) => void;
    removeWidget: (assetKey: AssetKey) => void;
    setModalOpen: (modal: Modal | null) => void;
}

export const useStore = create<State & Actions>((set) => ({
    primaryCurrency: "USD",
    secondaryCurrency: "EUR",
    widgets: ["BTC", "ETH"],
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
