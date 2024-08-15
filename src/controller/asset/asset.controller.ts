import { Controller, Get } from '@nestjs/common';
import { GetAllAssetService } from 'src/usecase/asset/getAllAsset.service';

@Controller('asset')
export class AssetController {

    constructor(private readonly getAllAssetService: GetAllAssetService) {}
    @Get('/all')
    async getAllAssets() {
        return this.getAllAssetService.call();
    }
}
