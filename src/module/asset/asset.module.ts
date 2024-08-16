import { Module } from '@nestjs/common';
import { AssetController } from 'src/controller/asset/asset.controller';
import { AssetRepository } from 'src/repository/Asset/assetRepository';
import { AssetInitLedgerService } from 'src/usecase/asset/assetInitLedger.service';
import { GetAllAssetService } from 'src/usecase/asset/getAllAsset.service';
import { GetAssetService } from 'src/usecase/asset/getAsset.service';
import { TransferService } from 'src/usecase/asset/transfer.service';
import { HyperledgerModule } from '../hyperledger/hyperledger.module';

@Module({
    imports: [HyperledgerModule],
    controllers: [AssetController],
    providers: [AssetInitLedgerService, GetAllAssetService, AssetRepository, TransferService, GetAssetService],
    exports: [],
})
export class AssetModule {}
