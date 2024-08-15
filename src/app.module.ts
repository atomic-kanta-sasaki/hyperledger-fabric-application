import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FabricGatewayService } from './repository/Asset/hyperledger/fabric-gateway/fabric-gateway.service';
import { GrpcClientProvider } from './repository/Asset/hyperledger/grpc-client/grpc-client';
import { IdentityProvider } from './repository/Asset/hyperledger/identity/identity';
import { SignerProvider } from './repository/Asset/hyperledger/signer/signer';
import { AssetController } from './controller/asset/asset.controller';
import { AssetInitLedgerService } from './usecase/asset/assetInitLedger.service';
import { GetAllAssetService } from './usecase/asset/getAllAsset.service';
import { AssetRepository } from './repository/Asset/assetRepository';
import { TransferService } from './usecase/asset/transfer.service';

@Module({
  imports: [],
  controllers: [AppController, AssetController],
  providers: [AppService, FabricGatewayService, GrpcClientProvider, IdentityProvider, SignerProvider, AssetInitLedgerService, GetAllAssetService, AssetRepository, TransferService],
})
export class AppModule {}
