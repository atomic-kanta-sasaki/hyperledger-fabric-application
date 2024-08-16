import { Controller, Get, Param } from '@nestjs/common';
import { GetAllAssetService } from 'src/usecase/asset/getAllAsset.service';
import { GetAssetService } from 'src/usecase/asset/getAsset.service';
import { TransferService } from 'src/usecase/asset/transfer.service';

@Controller('asset')
export class AssetController {

    constructor(
        private readonly getAllAssetService: GetAllAssetService,
        private readonly transferService: TransferService,
        private readonly getAssetService: GetAssetService
    ) {}
    @Get('/all')
    async getAllAssets() {
        return this.getAllAssetService.call();
    }

    @Get(':id')
    async getAsset(@Param('id') id: string) {
        return this.getAssetService.call(id);
    }

    @Get('/transfer')
    async transferAsset() {
        return this.transferService.call();
    }
}
