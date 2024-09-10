import { Module } from '@nestjs/common';
import { AssetRepositoryModule } from 'src/module/repository/asset/asset.module';
import { GetAssetService } from 'src/usecase/asset/getAsset.service';

@Module({
  imports: [AssetRepositoryModule],
  providers: [GetAssetService],
  exports: [GetAssetService],
})
export class GetAssetModule {}
