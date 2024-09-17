import { Test, TestingModule } from '@nestjs/testing';
import { RegisterAssetService } from './register.service';
import { AssetRepositoryModule } from 'src/module/repository/asset/asset.module';

describe('RegisterAssetService', () => {
  let provider: RegisterAssetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AssetRepositoryModule],
      providers: [RegisterAssetService],
    }).compile();

    provider = module.get<RegisterAssetService>(RegisterAssetService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
