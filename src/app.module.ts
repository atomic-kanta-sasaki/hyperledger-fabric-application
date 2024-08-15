import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FabricGatewayService } from './hyperledger/fabric-gateway/fabric-gateway.service';
import { GrpcClientProvider } from './hyperledger/grpc-client/grpc-client';
import { IdentityProvider } from './hyperledger/identity/identity';
import { SignerProvider } from './hyperledger/signer/signer';
import { AssetController } from './controller/asset/asset.controller';
import { AssetInitLedgerService } from './usecase/asset/assetInitLedger.service';
import { GetAllAssetService } from './usecase/asset/getAllAsset.service';
import { AssetRepository } from './repository/Asset/assetRepository';

@Module({
  imports: [],
  controllers: [AppController, AssetController],
  providers: [AppService, FabricGatewayService, GrpcClientProvider, IdentityProvider, SignerProvider, AssetInitLedgerService, GetAllAssetService, AssetRepository],
})
export class AppModule {}
