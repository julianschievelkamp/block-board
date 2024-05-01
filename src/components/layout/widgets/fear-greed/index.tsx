import Barometer from "components/elements/barometer";
import Div from "components/elements/div";
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
            <Div display="flex" justifyContent="center" alignItems="center">
                <Div maxWidth="75%" margin="0 1rem 0 0">
                    <Barometer
                        value={data?.value}
                        note={data?.value_classification}
                    />
                </Div>

                <Div>
                    <Text fontSize="0.5rem">Today: NEUTRAL</Text>
                    <Text fontSize="0.5rem">Yesterday: GREED</Text>
                    <Text fontSize="0.5rem">29.04.2024: GREED</Text>
                    <Text fontSize="0.5rem">28.04.2024: GREED</Text>
                </Div>
            </Div>
        </Widget>
    );
};

export default FearGreed;
