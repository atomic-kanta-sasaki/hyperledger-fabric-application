import { Test, TestingModule } from '@nestjs/testing';
import { InitAssetService } from './initAssetService';
import { AssetRepositoryModule } from 'src/module/repository/asset/asset.module';

describe('InitAssetService', () => {
  let provider: InitAssetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AssetRepositoryModule],
      providers: [InitAssetService],
    }).compile();

    provider = module.get<InitAssetService>(InitAssetService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
