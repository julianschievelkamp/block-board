import Barometer from "components/elements/barometer";
import Icon from "components/elements/icon";
import Text from "components/elements/text";
import Widget from "components/elements/widget";
import { lang } from "data/data";
import { useFearGreed } from "hooks/useFearGreed";

export interface FearGreedProps {}

const FearGreed = () => {
    const { isLoading, data } = useFearGreed();

    return (
        <Widget
            widgetKey="FearGreed"
            isLoading={isLoading}
            title={
                <Text lineHeight="1" bold>
                    {lang.fearGreed}
                </Text>
            }
            controls={
                <Icon
                    onClick={() => {}}
                    name="info"
                    size="1rem"
                    color="darkgrey"
                />
            }
        >
            <Barometer value={data?.value} note={data?.value_classification} />
        </Widget>
    );
};

export default FearGreed;
