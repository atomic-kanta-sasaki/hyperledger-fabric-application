import { Module } from '@nestjs/common';
import { AssetRepositoryModule } from 'src/module/repository/asset/asset.module';
import { RegisterAssetService } from 'src/usecase/asset/register.service';

@Module({
  imports: [AssetRepositoryModule],
  providers: [RegisterAssetService],
  exports: [RegisterAssetService],
})
export class RegisterAssetModule {}
