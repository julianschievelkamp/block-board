import { ThemeProvider } from "styled-components";

import Menu from "components/layout/menu";
import Ticker from "components/layout/widgets/ticker";

import { useDarkMode } from "hooks/general/useDarkMode";
import { darkTheme, lightTheme } from "styles/variables";
import GlobalStyle from "styles/global";

import { Dashboard, StyledApp } from "./styles";
import { useStore } from "state/useStore";
import AddModal from "components/layout/modals/add-modal";
import Background from "components/layout/modals/background";
import AlertsModal from "components/layout/modals/alerts-modal";

const App = () => {
    const { theme, toggleTheme, isLoading } = useDarkMode();
    const { widgets } = useStore();

    if (isLoading) return <></>;

    return (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <GlobalStyle />

            <StyledApp>
                <Dashboard>
                    {widgets.map((assetKey) => {
                        return <Ticker key={assetKey} assetKey={assetKey} />;
                    })}
                </Dashboard>

                <Background />
                <AddModal />
                <AlertsModal />

                <Menu theme={theme} toggleTheme={toggleTheme} />
            </StyledApp>
        </ThemeProvider>
    );
};

export default App;
