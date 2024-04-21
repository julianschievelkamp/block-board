import Widget from "components/elements/widget";
import Icon from "components/elements/icon";
import Div from "components/elements/div";

export interface SlotProps {}

const Slot = ({}: SlotProps) => {
    return (
        <Widget>
            <Div
                display="flex"
                alignItems="center"
                justifyContent="center"
                height="100%"
                onClick={() => {}}
            >
                <Icon name="add" size="4rem" color="darkgrey" />
            </Div>
        </Widget>
    );
};

export default Slot;
