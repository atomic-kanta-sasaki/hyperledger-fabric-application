import { Test, TestingModule } from '@nestjs/testing';
import { GrpcClient } from './grpc-client';

describe('GrpcClient', () => {
  let provider: GrpcClient;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GrpcClient],
    }).compile();

    provider = module.get<GrpcClient>(GrpcClient);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
