import { Injectable } from '@nestjs/common';
import { AssetRepository } from 'src/repository/asset/assetRepository';

@Injectable()
export class TransferService {
  constructor(private readonly assetRepository: AssetRepository) {}

  async call(assetId: string, newOwner: string): Promise<any> {
    const asset = await this.assetRepository.getAssetById(assetId);
    asset.changeOwner(newOwner);
    await this.assetRepository.transferAsset(asset);
    return asset;
  }
}
