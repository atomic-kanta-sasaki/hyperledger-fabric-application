import { Test, TestingModule } from '@nestjs/testing';
import { RegisterAssetService } from './register.service';
import { AssetRepositoryModule } from 'src/module/repository/asset/asset.module';
import { WebsocketGateway } from 'src/websocket/gateway';

describe('RegisterAssetService', () => {
  let provider: RegisterAssetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RegisterAssetService, WebsocketGateway],
    }).compile();

    provider = module.get<RegisterAssetService>(RegisterAssetService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
