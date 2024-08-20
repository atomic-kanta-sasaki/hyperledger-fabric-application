import { Module } from '@nestjs/common';
import { FabricGatewayService } from 'src/repository/hyperledger/fabric-gateway/fabric-gateway.service';
import { GrpcClientProvider } from 'src/repository/hyperledger/grpc-client/grpc-client';
import { IdentityProvider } from 'src/repository/hyperledger/identity/identity';
import { SignerProvider } from 'src/repository/hyperledger/signer/signer';
import { PeerRepository } from 'src/repository/peer/peerRepository';
import { PrismaService } from 'src/repository/prisma/prisma.service';
import { UserRepository } from 'src/repository/user/userRepository';
import { RequestService } from 'src/usecase/request/request.service';

@Module({
    providers: [FabricGatewayService, GrpcClientProvider, IdentityProvider, SignerProvider, RequestService, PrismaService, UserRepository, PeerRepository],
    exports: [FabricGatewayService, RequestService],
  })
export class HyperledgerModule {}
