import { Injectable } from '@nestjs/common';
import { Asset } from 'src/domain/asset/asset';
import { AssetRepository } from 'src/repository/Asset/assetRepository';

@Injectable()
export class GetAllAssetService {
    constructor(private readonly assetRepository: AssetRepository) {}
    async call(): Promise<void> {
        return this.assetRepository.getAllAssets();
    }
}
