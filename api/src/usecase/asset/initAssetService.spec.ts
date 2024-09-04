import { Test, TestingModule } from '@nestjs/testing';
import { InitAssetService } from './init-asset-service';

describe('InitAssetService', () => {
  let provider: InitAssetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InitAssetService],
    }).compile();

    provider = module.get<InitAssetService>(InitAssetService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
