import { Test, TestingModule } from '@nestjs/testing';
import { TransferService } from './transfer.service';
import { AssetRepository } from 'src/repository/asset/assetRepository';

describe('TransferService', () => {
  let service: TransferService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TransferService, AssetRepository],
    }).compile();

    service = module.get<TransferService>(TransferService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
