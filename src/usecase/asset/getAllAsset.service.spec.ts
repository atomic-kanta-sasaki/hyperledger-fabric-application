import { Test, TestingModule } from '@nestjs/testing';
import { GetAllAssetService } from './getAllAsset.service';

describe('GetAllAssetService', () => {
  let service: GetAllAssetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetAllAssetService],
    }).compile();

    service = module.get<GetAllAssetService>(GetAllAssetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
