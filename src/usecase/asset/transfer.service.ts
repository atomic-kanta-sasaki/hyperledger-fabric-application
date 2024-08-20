import { Injectable } from '@nestjs/common';
import { AssetRepository } from 'src/repository/asset/assetRepository';

@Injectable()
export class TransferService {
    constructor(
        private readonly assetRepository: AssetRepository
    ) {}

    async call(): Promise<any> {
        const asset = await this.assetRepository.getAssetById('asset1723695162129');
        asset.changeOwner('kuris')
        await this.assetRepository.transferAsset(asset);
        return asset;
    }
}
