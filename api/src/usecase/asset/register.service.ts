import { Injectable } from '@nestjs/common';
import { AssetRepository } from 'src/repository/asset/assetRepository';

@Injectable()
export class RegisterAssetService {
  constructor(private readonly assetRepository: AssetRepository) {}
  async call(): Promise<void> {
    // return this.assetRepository.initLedger();
    console.log('registerAssetService');
  }
}
