import { ThemeProvider } from "styled-components";

import Menu from "components/layout/menu";
import Ticker from "components/layout/widgets/ticker";
import ModalBackground from "components/layout/modals/modal-background";

import { useDarkMode } from "hooks/general/useDarkMode";
import { darkTheme, lightTheme } from "styles/variables";
import GlobalStyle from "styles/global";

import { Dashboard, StyledApp } from "./styles";
import { useStore } from "data/store";
import AddModal from "components/layout/modals/add-modal";
import AlertsModal from "components/layout/modals/alerts-modal";
import { AssetKey, OtherKey } from "data/types";
import { assets, other } from "data/data";
import Div from "components/elements/div";

const App = () => {
    const { theme, toggleTheme, isLoading } = useDarkMode();
    const { widgets } = useStore();

    if (isLoading) return <></>;

    return (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <GlobalStyle />

            <StyledApp>
                <Dashboard>
                    {Object.keys(other).map((key) => {
                        const otherKey = key as OtherKey;

                        return (
                            widgets.includes(otherKey) && (
                                <Div key={key}>{other[otherKey].content}</Div>
                            )
                        );
                    })}

                    {Object.keys(assets).map((key) => {
                        const assetKey = key as AssetKey;

                        return (
                            widgets.includes(assetKey) && (
                                <Ticker key={key} assetKey={assetKey} />
                            )
                        );
                    })}
                </Dashboard>

                <ModalBackground />
                <AddModal />
                <AlertsModal />

                <Menu theme={theme} toggleTheme={toggleTheme} />
            </StyledApp>
        </ThemeProvider>
    );
};

export default App;
