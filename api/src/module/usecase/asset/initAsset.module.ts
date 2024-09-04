import { Module } from "@nestjs/common";
import { AssetRepositoryModule } from "src/module/repository/asset/asset.module";
import { InitAssetService } from "src/usecase/asset/initAssetService";

@Module({
    imports: [AssetRepositoryModule],
    providers: [InitAssetService],
    exports: [InitAssetService]
})

export class InitAssetModule {}