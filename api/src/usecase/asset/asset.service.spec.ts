import { Test, TestingModule } from '@nestjs/testing';
import { AssetInitLedgerService } from './assetInitLedger.service';
import { AssetRepository } from 'src/repository/asset/assetRepository';

describe('AssetService', () => {
  let service: AssetInitLedgerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AssetInitLedgerService, AssetRepository],
    }).compile();

    service = module.get<AssetInitLedgerService>(AssetInitLedgerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
