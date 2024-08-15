import { Injectable } from '@nestjs/common';
import { AssetRepository } from 'src/repository/Asset/assetRepository';

@Injectable()
export class TransferService {
    constructor(
        private readonly assetRepository: AssetRepository
    ) {}

    async call(): Promise<void> {
        // const asset = asset.
        await this.assetRepository.transferAsset('Saptha');
    }
}
