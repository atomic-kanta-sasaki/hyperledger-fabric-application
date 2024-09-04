import { Module } from '@nestjs/common';
import { FabricGatewayService } from 'src/repository/hyperledger/fabric-gateway/fabric-gateway.service';
import { GrpcClientProvider } from 'src/repository/hyperledger/grpc-client/grpc-client';
import { IdentityProvider } from 'src/repository/hyperledger/identity/identity';
import { SignerProvider } from 'src/repository/hyperledger/signer/signer';
import { RequestService } from 'src/usecase/request/request.service';
import { PeerRepositoryModule } from '../peer/peer.module';
import { UserRepositoryModule } from '../user/user.module';

@Module({
    imports: [PeerRepositoryModule, UserRepositoryModule],
    providers: [FabricGatewayService, GrpcClientProvider, IdentityProvider, SignerProvider, RequestService],
    exports: [FabricGatewayService, RequestService],
  })
export class HyperledgerModule {}
