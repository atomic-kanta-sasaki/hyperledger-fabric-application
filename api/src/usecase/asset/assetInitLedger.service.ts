import { Injectable } from '@nestjs/common';
import { AssetRepository } from 'src/repository/asset/assetRepository';

@Injectable()
export class AssetInitLedgerService {

    constructor(private readonly assetRepository: AssetRepository) {}
    async call(): Promise<void> {
        await this.assetRepository.initLedger();
    }
}
