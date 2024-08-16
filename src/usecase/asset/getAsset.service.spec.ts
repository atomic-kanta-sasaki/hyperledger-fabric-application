import { Test, TestingModule } from '@nestjs/testing';
import { GetAssetService } from './getAsset.service';

describe('GetAssetService', () => {
  let service: GetAssetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetAssetService],
    }).compile();

    service = module.get<GetAssetService>(GetAssetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
