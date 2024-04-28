import Text from "components/elements/text";
import Modal from "components/elements/modal";

import { assets, lang } from "data/constants";
import { AssetKey } from "data/types";
import { Grid, Select } from "./styles";
import { useStore } from "data/store";

export interface AddModalProps {
    onClose: () => void;
    isOpen: boolean;
}

const AddModal = ({ isOpen, onClose }: AddModalProps) => {
    const { widgets, addWidget, removeWidget } = useStore();

    return (
        <Modal title={lang.addWidget} isOpen={isOpen} onClose={onClose}>
            <Grid>
                {Object.keys(assets).map((key) => {
                    const assetKey = key as AssetKey;
                    const asset = assets[assetKey];
                    const isActive = widgets.includes(assetKey);

                    return (
                        <Select
                            key={key}
                            color={isActive ? asset.color : undefined}
                            onClick={() =>
                                isActive
                                    ? removeWidget(assetKey)
                                    : addWidget(assetKey)
                            }
                        >
                            <Text
                                color={isActive ? asset.color : undefined}
                                textAlign="center"
                            >
                                {`${asset.symbol} ${asset.key.toUpperCase()}`}
                            </Text>
                        </Select>
                    );
                })}
            </Grid>
        </Modal>
    );
};

export default AddModal;
