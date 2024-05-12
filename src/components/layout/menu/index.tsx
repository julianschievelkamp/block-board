import Text from "components/elements/text";
import Icon from "components/elements/icon";
import Button from "components/elements/button";

import { useMediaQuery } from "hooks/general/useMediaQuery";
import { queries } from "styles/variables";

import { ButtonContainer, LogoContainer, StyledMenu } from "./styles";

import { lang } from "data/lang";
import { useStore } from "data/store";

export interface MenuProps {
    theme: string;
    toggleTheme: () => void;
}

const Menu = ({ theme, toggleTheme }: MenuProps) => {
    const { setModalOpen } = useStore();

    const isXs = useMediaQuery(queries.xs);
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
                    {isLg && lang.addWidget}
                </Button>
                <Button
                    onClick={() => setModalOpen("alerts")}
                    iconName="notifications"
                >
                    {isLg && lang.priceAlerts}
                </Button>
                <Button onClick={() => {}} iconName="restart">
                    {isLg && "Clear Storage"}
                </Button>
                <Button
                    onClick={() => toggleTheme()}
                    iconName={isLightTheme ? "dark" : "light"}
                >
                    {isLg && (isLightTheme ? lang.darkTheme : lang.lightTheme)}
                </Button>
            </ButtonContainer>
        </StyledMenu>
    );
};

export default Menu;
