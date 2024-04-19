import Text from "components/elements/text";
import Icon from "components/elements/icon";

import { useMediaQuery } from "hooks/useMediaQuery";
import { queries } from "styles/variables";

import { ButtonContainer, LogoContainer, StyledMenu } from "./styles";

import { lang } from "data/constants";
import Button from "components/elements/button";

export interface MenuProps {
    theme: string;
    toggleTheme: () => void;
}

const Menu = ({ theme, toggleTheme }: MenuProps) => {
    const isXs = useMediaQuery(queries.xs);
    const isMd = useMediaQuery(queries.md);
    const isLg = useMediaQuery(queries.lg);

    const lightTheme = theme === "light";

    return (
        <StyledMenu>
            {isXs && (
                <LogoContainer>
                    <Icon name="graph" />
                    <Text bold margin="0 1rem 0 0.5rem">
                        {lang.title}
                    </Text>
                </LogoContainer>
            )}

            {isLg && <Text margin="1.5rem 0">{lang.intro}</Text>}

            <ButtonContainer>
                <Button
                    onClick={() => toggleTheme()}
                    iconName={lightTheme ? "darkMode" : "lightMode"}
                >
                    {isMd && (lightTheme ? "Dark Theme" : "Light Theme")}
                </Button>
            </ButtonContainer>
        </StyledMenu>
    );
};

export default Menu;
