export const lang = {
    title: "Block Board",
    intro: "Block Board displays current crypto currency market data in real time. Use the widgets to track your favorite parameters and set up alerts for price movements.",
    darkTheme: "Dark Theme",
    lightTheme: "Light Theme",
    addWidget: "Add Widget",
    priceAlerts: "Price Alerts",
    alertCount: (count: number) =>
        `${count} Price Alert${count > 1 ? "s" : ""}`,
    lastUpdate: (time: string) => `Last Update: ${time}`,
    error: "Service unavailable",
    api: "Source: api.gemini.com",
    fearGreed: "Fear & Greed Index",
    marketData: "Market Data",
};
