import { Module } from '@nestjs/common';
import { AssetRepositoryModule } from 'src/module/repository/asset/asset.module';
import { AssetInitLedgerService } from 'src/usecase/asset/assetInitLedger.service';
@Module({
  imports: [AssetRepositoryModule],
  providers: [AssetInitLedgerService],
  exports: [AssetInitLedgerService],
})
export class AssetInitLedgerModule {}
