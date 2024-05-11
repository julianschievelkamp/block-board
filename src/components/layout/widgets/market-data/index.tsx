import Div from "components/elements/div";
import Icon from "components/elements/icon";
import Text from "components/elements/text";
import Widget from "components/elements/widget";

import { lang } from "data/lang";

const MarketData = () => {
    return (
        <Widget
            isLoading={false}
            title={
                <Text lineHeight="1" bold>
                    {lang.marketData}
                </Text>
            }
            controls={<Icon onClick={() => {}} name="info" color="darkgrey" />}
        >
            <Div
                display="flex"
                justifyContent="center"
                alignItems="center"
            ></Div>
        </Widget>
    );
};

export default MarketData;
