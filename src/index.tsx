import ReactDOM from "react-dom/client";
import App from "app";
import GlobalStyle from "styles/global";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

root.render(
    <>
        <GlobalStyle />
        <App />
    </>
);
