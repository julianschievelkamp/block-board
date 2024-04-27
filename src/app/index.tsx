import { ThemeProvider } from "styled-components";

import Menu from "components/layout/menu";
import Ticker from "components/layout/widgets/ticker";
import ModalBackground from "components/layout/modals/modal-background";

import { useDarkMode } from "hooks/general/useDarkMode";
import { darkTheme, lightTheme } from "styles/variables";
import GlobalStyle from "styles/global";

import { Dashboard, StyledApp } from "./styles";
import { useStore } from "state/useStore";
import AddModal from "components/layout/modals/add-modal";
import AlertsModal from "components/layout/modals/alerts-modal";
import { useState } from "react";
import { Modal } from "data/types";

const App = () => {
    const [modalOpen, setModalOpen] = useState<Modal | null>(null);
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

                <ModalBackground
                    isOpen={modalOpen !== null}
                    onClick={() => setModalOpen(null)}
                />
                <AddModal
                    isOpen={modalOpen === "add"}
                    onClose={() => setModalOpen(null)}
                />
                <AlertsModal
                    isOpen={modalOpen === "alerts"}
                    onClose={() => setModalOpen(null)}
                />

                <Menu
                    theme={theme}
                    toggleTheme={toggleTheme}
                    setModalOpen={setModalOpen}
                />
            </StyledApp>
        </ThemeProvider>
    );
};

export default App;
