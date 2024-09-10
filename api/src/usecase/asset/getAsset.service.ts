import { Injectable } from '@nestjs/common';
import { Asset } from 'src/domain/asset/asset';
import { AssetRepository } from 'src/repository/asset/assetRepository';

@Injectable()
export class GetAssetService {
  constructor(private readonly assetRepository: AssetRepository) {}
  async call(id: string): Promise<Asset> {
    return this.assetRepository.getAssetById(id);
  }
}
