import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { GetAllAssetService } from 'src/usecase/asset/getAllAsset.service';
import { GetAssetService } from 'src/usecase/asset/getAsset.service';
import { TransferService } from 'src/usecase/asset/transfer.service';
import { TransferRequestBody } from 'src/types/asset/transferRequestBody';
import { InitAssetService } from 'src/usecase/asset/initAssetService';

@Controller('asset')
export class AssetController {

    constructor(
        private readonly getAllAssetService: GetAllAssetService,
        private readonly transferService: TransferService,
        private readonly getAssetService: GetAssetService,
        private readonly initAssetService: InitAssetService
    ) {}
    @Get('/all')
    async getAllAssets() {
        return this.getAllAssetService.call();
    }

    @Get(':id')
    async getAsset(@Param('id') id: string) {
        return this.getAssetService.call(id);
    }

    @Post('/transfer')
    async transferAsset(@Body() body: TransferRequestBody) {
        return this.transferService.call(body.assetId, body.newOwner);
    }

    @Post('/init')
    async init() {
        return this.initAssetService.call();
    }
}
