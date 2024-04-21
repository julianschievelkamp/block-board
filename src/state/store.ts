import { create } from "zustand";

import { AssetKey } from "data/types";

interface State {
    widgets: AssetKey[];
}

interface Actions {
    addWidget: (assetKey: AssetKey) => void;
    removeWidget: (assetKey: AssetKey) => void;
}

export const useStore = create<State & Actions>((set) => ({
    widgets: ["BTC", "ETH"],

    addWidget: (widget) =>
        set((state) => ({
            widgets: [...state.widgets, widget],
        })),

    removeWidget: (widget) =>
        set((state) => ({
            widgets: state.widgets.filter((item) => item !== widget),
        })),
}));
