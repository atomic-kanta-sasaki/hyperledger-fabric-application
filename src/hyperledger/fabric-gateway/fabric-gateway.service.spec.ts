import { Test, TestingModule } from '@nestjs/testing';
import { FabricGatewayService } from './fabric-gateway.service';

describe('FabricGatewayService', () => {
  let service: FabricGatewayService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FabricGatewayService],
    }).compile();

    service = module.get<FabricGatewayService>(FabricGatewayService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
