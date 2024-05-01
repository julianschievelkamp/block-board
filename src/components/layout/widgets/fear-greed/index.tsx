import Barometer from "components/elements/barometer";
import Div from "components/elements/div";
import Icon from "components/elements/icon";
import Text from "components/elements/text";
import Widget from "components/elements/widget";
import { lang } from "data/lang";
import { useFearGreed } from "hooks/useFearGreed";

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
                        value={data && data[0].value}
                        note={data && data[0].value_classification}
                    />
                </Div>

                <Div>
                    {data?.map((item, index) => {
                        return (
                            <Text
                                key={item.timestamp}
                                fontSize="0.5rem"
                                bold={index === 0}
                                color={index !== 0 ? "darkgrey" : undefined}
                            >
                                {`${new Date(
                                    item.timestamp * 1000
                                ).toLocaleDateString()}: ${item.value_classification.toUpperCase()}`}
                            </Text>
                        );
                    })}
                </Div>
            </Div>
        </Widget>
    );
};

export default FearGreed;
