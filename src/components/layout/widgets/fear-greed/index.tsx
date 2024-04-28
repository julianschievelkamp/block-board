import Text from "components/elements/text";
import Widget from "components/elements/widget";
import { lang } from "data/constants";

export interface FearGreedProps {}

const FearGreed = () => {
    const isLoading = false;

    return (
        <Widget
            widgetKey="FearGreed"
            title={lang.fearGreed}
            isLoading={isLoading}
        >
            <Text>Text</Text>
        </Widget>
    );
};

export default FearGreed;
