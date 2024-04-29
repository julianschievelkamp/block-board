import Text from "components/elements/text";
import Icon from "components/elements/icon";

import { useMediaQuery } from "hooks/general/useMediaQuery";
import { queries } from "styles/variables";

import { ButtonContainer, LogoContainer, StyledMenu } from "./styles";

import { lang } from "data/data";
import Button from "components/elements/button";
import { Modal } from "data/types";

export interface MenuProps {
    theme: string;
    toggleTheme: () => void;
    setModalOpen: (modal: Modal | null) => void;
}

const Menu = ({ theme, toggleTheme, setModalOpen }: MenuProps) => {
    const isXs = useMediaQuery(queries.xs);
    const isMd = useMediaQuery(queries.md);
    const isLg = useMediaQuery(queries.lg);
    const isLightTheme = theme === "light";

    return (
        <StyledMenu>
            {isXs && (
                <LogoContainer>
                    <Icon name="graph" size="1.5rem" />
                    <Text bold margin="0 1rem">
                        {lang.title}
                    </Text>
                </LogoContainer>
            )}

            {isLg && (
                <Text margin="1rem 0" fontSize="0.75rem">
                    {lang.intro}
                </Text>
            )}

            <ButtonContainer>
                <Button onClick={() => setModalOpen("add")} iconName="add">
                    {isMd && lang.addWidget}
                </Button>
                <Button
                    onClick={() => setModalOpen("alerts")}
                    iconName="notifications"
                >
                    {isMd && lang.priceAlerts}
                </Button>
                <Button
                    onClick={() => toggleTheme()}
                    iconName={isLightTheme ? "dark" : "light"}
                >
                    {isMd && (isLightTheme ? lang.darkTheme : lang.lightTheme)}
                </Button>
            </ButtonContainer>
        </StyledMenu>
    );
};

export default Menu;
