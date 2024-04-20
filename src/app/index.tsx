import { ThemeProvider } from "styled-components";

import Menu from "components/layout/menu";
import Ticker from "components/widgets/ticker";

import { useDarkMode } from "hooks/general/useDarkMode";
import { darkTheme, lightTheme } from "styles/variables";
import GlobalStyle from "styles/global";

import { Dashboard, StyledApp } from "./styles";

const App = () => {
    const { theme, toggleTheme, isLoading } = useDarkMode();

    if (isLoading) return <></>;

    return (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <GlobalStyle />

            <StyledApp>
                <Dashboard>
                    <Ticker assetKey="BTC" initialCurrency="USD" />
                    <Ticker assetKey="ETH" initialCurrency="USD" />
                </Dashboard>

                <Menu theme={theme} toggleTheme={toggleTheme} />
            </StyledApp>
        </ThemeProvider>
    );
};

export default App;
