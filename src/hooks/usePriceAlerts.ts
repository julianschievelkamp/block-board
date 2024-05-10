import { useStore } from "data/store";
import { AssetKey, Currency } from "data/types";

export const usePriceAlerts = () => {
    const isSupported = "Notification" in window;
    const { priceAlerts, removePriceAlert, addPriceAlert } = useStore();

    const checkAlert = (
        assetKey: AssetKey,
        price: number,
        currency: Currency
    ) => {
        if (!isSupported) return;

        const matches = priceAlerts.filter(
            (alert) =>
                alert.assetKey === assetKey &&
                alert.currency === currency &&
                alert.reached_at === 0 &&
                ((alert.base > alert.target && price < alert.target) ||
                    (alert.base < alert.target && price > alert.target))
        );

        matches.forEach((match) => {
            removePriceAlert(match);
            addPriceAlert({ ...match, reached_at: Date.now() });

            console.log("alert");

            // notifyUser("");
        });
    };

    const notifyUser = (message: string) => {
        if (Notification.permission === "granted") {
            const notification = new Notification(message);
        } else if (Notification.permission !== "denied") {
            Notification.requestPermission().then((permission) => {
                if (permission === "granted") {
                    const notification = new Notification(message);
                }
            });
        }
    };

    return { isSupported, checkAlert };
};
