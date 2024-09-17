import { Module } from '@nestjs/common';
import { AssetController } from 'src/controller/asset/asset.controller';
import { GetAllAssetModule } from 'src/module/usecase/asset/getAllAsset.module';
import { TransferModule } from 'src/module/usecase/asset/transfer.module';
import { GetAssetModule } from 'src/module/usecase/asset/getAsset.module';
import { InitAssetModule } from 'src/module/usecase/asset/initAsset.module';
import { RegisterAssetModule } from 'src/module/usecase/asset/register.module';

@Module({
  imports: [GetAllAssetModule, GetAssetModule, TransferModule, InitAssetModule, RegisterAssetModule],
  controllers: [AssetController],
})
export class AssetModule {}
