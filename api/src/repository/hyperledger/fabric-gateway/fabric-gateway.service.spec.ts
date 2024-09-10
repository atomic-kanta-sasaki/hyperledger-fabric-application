import { Test, TestingModule } from '@nestjs/testing';
import { FabricGatewayService } from './fabric-gateway.service';
import { PeerRepositoryModule } from 'src/module/repository/peer/peer.module';
import { UserRepositoryModule } from 'src/module/repository/user/user.module';
import { GrpcClientProvider } from '../grpc-client/grpc-client';
import { IdentityProvider } from '../identity/identity';
import { SignerProvider } from '../signer/signer';
import { RequestService } from 'src/usecase/request/request.service';

describe('FabricGatewayService', () => {
  let service: FabricGatewayService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PeerRepositoryModule, UserRepositoryModule],
      providers: [
        FabricGatewayService,
        GrpcClientProvider,
        IdentityProvider,
        SignerProvider,
        RequestService,
      ],
    }).compile();

    service = module.get<FabricGatewayService>(FabricGatewayService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
