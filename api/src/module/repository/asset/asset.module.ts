import { Module } from '@nestjs/common';
import { AssetRepository } from 'src/repository/asset/assetRepository';
import { HyperledgerModule } from '../hyperledger/hyperledger.module';

@Module({
  imports: [HyperledgerModule],
  providers: [AssetRepository],
  exports: [AssetRepository],
})
export class AssetRepositoryModule {}
