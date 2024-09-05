import { Test, TestingModule } from '@nestjs/testing';
import { GetAssetService } from './getAsset.service';
import { AssetRepositoryModule } from 'src/module/repository/asset/asset.module';

describe('GetAssetService', () => {
  let service: GetAssetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AssetRepositoryModule],
      providers: [GetAssetService],
    }).compile();

    service = module.get<GetAssetService>(GetAssetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
