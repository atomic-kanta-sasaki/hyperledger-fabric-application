import { Test, TestingModule } from '@nestjs/testing';
import { GetAssetService } from './getAsset.service';
import { AssetRepository } from 'src/repository/asset/assetRepository';

describe('GetAssetService', () => {
  let service: GetAssetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetAssetService, AssetRepository],
    }).compile();

    service = module.get<GetAssetService>(GetAssetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
