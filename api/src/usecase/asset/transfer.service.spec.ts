import { Test, TestingModule } from '@nestjs/testing';
import { TransferService } from './transfer.service';
import { AssetRepositoryModule } from 'src/module/repository/asset/asset.module';

describe('TransferService', () => {
  let service: TransferService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AssetRepositoryModule],
      providers: [TransferService],
    }).compile();

    service = module.get<TransferService>(TransferService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
