import { Test, TestingModule } from '@nestjs/testing';
import { AssetInitLedgerService } from './assetInitLedger.service';

describe('AssetService', () => {
  let service: AssetInitLedgerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AssetInitLedgerService],
    }).compile();

    service = module.get<AssetInitLedgerService>(AssetInitLedgerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
