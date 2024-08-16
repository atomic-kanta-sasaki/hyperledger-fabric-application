import { Module } from '@nestjs/common';
import { FabricGatewayService } from 'src/repository/hyperledger/fabric-gateway/fabric-gateway.service';
import { GrpcClientProvider } from 'src/repository/hyperledger/grpc-client/grpc-client';
import { IdentityProvider } from 'src/repository/hyperledger/identity/identity';
import { SignerProvider } from 'src/repository/hyperledger/signer/signer';

@Module({
    providers: [FabricGatewayService, GrpcClientProvider, IdentityProvider, SignerProvider],
    exports: [FabricGatewayService, GrpcClientProvider, IdentityProvider, SignerProvider],
  })
export class HyperledgerModule {}
