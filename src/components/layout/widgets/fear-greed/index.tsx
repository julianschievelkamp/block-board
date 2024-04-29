import Text from "components/elements/text";
import Widget from "components/elements/widget";
import { lang } from "data/constants";
import { useFearGreed } from "hooks/useFearGreed";

export interface FearGreedProps {}

const FearGreed = () => {
    const { isLoading, data } = useFearGreed();

    console.log(data);

    return (
        <Widget
            widgetKey="FearGreed"
            isLoading={isLoading}
            title={
                <Text lineHeight="1" bold>
                    {lang.fearGreed}
                </Text>
            }
        >
            <Text>Text</Text>
        </Widget>
    );
};

export default FearGreed;
