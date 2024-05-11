import Text from "components/elements/text";
import Modal from "components/elements/modal";
import Image from "components/elements/image";

import { assets } from "data/data";
import { lang } from "data/lang";
import { AssetKey } from "data/types";
import { Grid, Select } from "./styles";
import { useStore } from "data/store";

const AddModal = () => {
    const { widgets, addWidget, removeWidget, modalOpen, setModalOpen } =
        useStore();

    return (
        <Modal
            title={lang.addWidget}
            isOpen={modalOpen === "add"}
            onClose={() => setModalOpen(null)}
        >
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
                            <Text
                                textAlign="center"
                                margin="0 0 0 0.25rem"
                                fontSize="0.75rem"
                                bold
                            >
                                {asset.assetKey.toUpperCase()}
                            </Text>
                        </Select>
                    );
                })}
            </Grid>
        </Modal>
    );
};

export default AddModal;
