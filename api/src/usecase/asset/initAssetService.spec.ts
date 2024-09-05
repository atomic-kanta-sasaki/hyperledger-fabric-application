import { Test, TestingModule } from '@nestjs/testing';
import { InitAssetService } from './initAssetService';
import { AssetRepository } from 'src/repository/asset/assetRepository';

describe('InitAssetService', () => {
  let provider: InitAssetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InitAssetService, AssetRepository],
    }).compile();

    provider = module.get<InitAssetService>(InitAssetService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
