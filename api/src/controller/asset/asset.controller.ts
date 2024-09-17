import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { GetAllAssetService } from 'src/usecase/asset/getAllAsset.service';
import { GetAssetService } from 'src/usecase/asset/getAsset.service';
import { TransferService } from 'src/usecase/asset/transfer.service';
import { TransferRequestBody } from 'src/types/asset/transferRequestBody';
import { InitAssetService } from 'src/usecase/asset/initAssetService';
import { RegisterAssetService } from 'src/usecase/asset/register.service';

@Controller('asset')
export class AssetController {
  constructor(
    private readonly getAllAssetService: GetAllAssetService,
    private readonly transferService: TransferService,
    private readonly getAssetService: GetAssetService,
    private readonly initAssetService: InitAssetService,
    private readonly registerAssetService: RegisterAssetService,
  ) {}
  @Get('/all')
  async getAllAssets() {
    return this.getAllAssetService.call();
  }
  
  @Get('/register')
  async registerAsset(@Query() query) {
    console.log(query.value);
    const jsonString = atob(query.value);
    console.log(jsonString);
    return this.registerAssetService.call();
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
