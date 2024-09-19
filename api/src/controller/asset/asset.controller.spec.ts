import { Test, TestingModule } from '@nestjs/testing';
import { AssetController } from './asset.controller';
import { GetAllAssetModule } from 'src/module/usecase/asset/getAllAsset.module';
import { GetAssetModule } from 'src/module/usecase/asset/getAsset.module';
import { TransferModule } from 'src/module/usecase/asset/transfer.module';
import { InitAssetModule } from 'src/module/usecase/asset/initAsset.module';
import { RegisterAssetModule } from 'src/module/usecase/asset/register.module';

describe('AssetController', () => {
  let controller: AssetController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        GetAllAssetModule,
        GetAssetModule,
        TransferModule,
        InitAssetModule,
        RegisterAssetModule,
      ],
      controllers: [AssetController],
    }).compile();

    controller = module.get<AssetController>(AssetController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
