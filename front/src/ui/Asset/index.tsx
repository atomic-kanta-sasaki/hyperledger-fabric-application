import React from "react";

type Asset = {
    docType?: string;
    ID?: string;
    Color?: string;
    Size?: number;
    Owner?: string;
    AppraisedValue?: number;
};

type AssetUiProps = {
    assets: Asset[];
    loading: boolean;
    error: any;
};

export const AssetUi: React.FC<AssetUiProps> = ({assets, loading, error}: AssetUiProps) => {
    return (
        <div>
            {loading && <div>Loading...</div>}
            {error && <div>Error: {error.message}</div>}
            {assets && (
                assets.map((asset: Asset) => {
                    return (
                        <div key={asset.ID}>
                            <div>Document Type: {asset.docType}</div>
                            <div>ID: {asset.ID}</div>
                            <div>Color: {asset.Color}</div>
                            <div>Size: {asset.Size}</div>
                            <div>Owner: {asset.Owner}</div>
                            <div>Appraised Value: {asset.AppraisedValue}</div>
                        </div>
                    )
                })
            )}
        </div>
    )
}