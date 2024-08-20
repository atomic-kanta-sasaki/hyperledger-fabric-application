import { Module } from "@nestjs/common";
import { AssetRepositoryModule } from "src/module/repository/asset/asset.module";
import { GetAllAssetService } from "src/usecase/asset/getAllAsset.service";

@Module({
    imports: [AssetRepositoryModule],
    providers: [GetAllAssetService],
    exports: [GetAllAssetService]
})

export class GetAllAssetModule {}