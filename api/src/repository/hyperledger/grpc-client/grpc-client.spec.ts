import { Test, TestingModule } from '@nestjs/testing';
import { GrpcClientProvider } from './grpc-client';

describe('GrpcClient', () => {
  let provider: GrpcClientProvider;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GrpcClientProvider],
    }).compile();

    provider = module.get<GrpcClientProvider>(GrpcClientProvider);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
