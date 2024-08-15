import { Injectable } from '@nestjs/common';
import { FabricGatewayService } from 'src/hyperledger/fabric-gateway/fabric-gateway.service';
import { AssetRepository } from 'src/repository/Asset/assetRepository';

@Injectable()
export class AssetInitLedgerService {

    constructor(private readonly assetRepository: AssetRepository) {}
    async call(): Promise<void> {
        await this.assetRepository.initLedger();
    }
}
