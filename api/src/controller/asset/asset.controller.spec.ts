import { Test, TestingModule } from '@nestjs/testing';
import { AssetController } from './asset.controller';
import { GetAllAssetService } from 'src/usecase/asset/getAllAsset.service';
import { TransferService } from 'src/usecase/asset/transfer.service';
import { GetAssetService } from 'src/usecase/asset/getAsset.service';
import { InitAssetService } from 'src/usecase/asset/initAssetService';

describe('AssetController', () => {
  let controller: AssetController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AssetController],
      providers: [GetAllAssetService, TransferService, GetAssetService, InitAssetService]
    }).compile();

    controller = module.get<AssetController>(AssetController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
