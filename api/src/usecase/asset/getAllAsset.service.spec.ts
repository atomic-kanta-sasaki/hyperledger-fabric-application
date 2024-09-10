import { Test, TestingModule } from '@nestjs/testing';
import { GetAllAssetService } from './getAllAsset.service';
import { AssetRepositoryModule } from 'src/module/repository/asset/asset.module';

describe('GetAllAssetService', () => {
  let service: GetAllAssetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetAllAssetService],
      imports: [AssetRepositoryModule],
    }).compile();

    service = module.get<GetAllAssetService>(GetAllAssetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
