import GlobalStyle from "styles/global";
import Headline from "elements/components/Headline/Headline";

import { Main } from "./App.styles";
import Text from "elements/components/Text/Text";

const App = () => (
    <>
        <GlobalStyle />

        <Main>
            <Headline>BlockBoard</Headline>
            <Text>Coming soon</Text>
        </Main>
    </>
);

export default App;
