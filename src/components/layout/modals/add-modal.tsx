import Text from "components/elements/text";
import Modal from "components/elements/modal";
import Card from "components/elements/card";

import { assets } from "data/assets";
import { AssetKey } from "data/types";
import { Grid, StyledCard } from "./styles";
import { useStore } from "state/useStore";

export interface AddModalProps {
    onClose: () => void;
    isOpen: boolean;
}

const AddModal = ({ isOpen, onClose }: AddModalProps) => {
    const { widgets, addWidget, removeWidget } = useStore();
    return (
        <Modal title="Add Widget" isOpen={isOpen} onClose={onClose}>
            <Grid>
                {Object.keys(assets).map((key) => {
                    const assetKey = key as AssetKey;
                    const asset = assets[assetKey];
                    const isActive = widgets.includes(assetKey);

                    return (
                        <StyledCard
                            color={isActive ? asset.color : undefined}
                            key={key}
                            onClick={() =>
                                isActive
                                    ? removeWidget(assetKey)
                                    : addWidget(assetKey)
                            }
                        >
                            <Text color={isActive ? asset.color : undefined}>
                                {`${asset.symbol} ${asset.key.toUpperCase()}`}
                            </Text>
                        </StyledCard>
                    );
                })}
            </Grid>
        </Modal>
    );
};

export default AddModal;
