import { Test, TestingModule } from '@nestjs/testing';
import { AssetInitLedgerService } from './assetInitLedger.service';
import { AssetRepositoryModule } from 'src/module/repository/asset/asset.module';

describe('AssetService', () => {
  let service: AssetInitLedgerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AssetRepositoryModule],
      providers: [AssetInitLedgerService],
    }).compile();

    service = module.get<AssetInitLedgerService>(AssetInitLedgerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
