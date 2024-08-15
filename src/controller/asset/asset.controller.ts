import { Controller, Get } from '@nestjs/common';
import { GetAllAssetService } from 'src/usecase/asset/getAllAsset.service';
import { TransferService } from 'src/usecase/asset/transfer.service';

@Controller('asset')
export class AssetController {

    constructor(
        private readonly getAllAssetService: GetAllAssetService,
        private readonly transferService: TransferService
    ) {}
    @Get('/all')
    async getAllAssets() {
        return this.getAllAssetService.call();
    }

    @Get('/transfer')
    async transferAsset() {
        return this.transferService.call();
    }
}
