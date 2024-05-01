import Text from "components/elements/text";
import Modal from "components/elements/modal";

import { assets } from "data/data";
import { lang } from "data/lang";
import { AssetKey } from "data/types";
import { Grid, Select } from "./styles";
import { useStore } from "data/store";
import Image from "components/elements/image";

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
                            opacity={isActive ? 1 : 0.5}
                            color={isActive ? asset.color : undefined}
                            onClick={() =>
                                isActive
                                    ? removeWidget(assetKey)
                                    : addWidget(assetKey)
                            }
                        >
                            <Image
                                src={asset.img}
                                alt={asset.symbol}
                                height="1rem"
                                width="1rem"
                            />
                            <Text textAlign="center" margin="0 0 0 0.25rem">
                                {asset.key.toUpperCase()}
                            </Text>
                        </Select>
                    );
                })}
            </Grid>
        </Modal>
    );
};

export default AddModal;
