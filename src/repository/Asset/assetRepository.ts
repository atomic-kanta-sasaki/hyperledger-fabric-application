import { Contract } from "@hyperledger/fabric-gateway";
import { FabricGatewayService } from "src/repository/hyperledger/fabric-gateway/fabric-gateway.service";
import { Injectable, OnModuleInit } from '@nestjs/common';
import { Asset } from "src/domain/asset/asset";

@Injectable()
export class AssetRepository implements OnModuleInit {
    private readonly channelName = 'mychannel';
    private readonly chaincodeName = 'basic';
    private contract: Contract;
    private utf8Decoder = new TextDecoder();

    constructor(
        private readonly fabricGatewayService: FabricGatewayService,
    ) {}

    async onModuleInit() {
        await this.fabricGatewayService.createConnection();
        this.contract = this.fabricGatewayService.getContract(this.channelName, this.chaincodeName);
    }
    async initLedger() {
        await this.contract.submitTransaction('InitLedger');
    }

    async getAllAssets() {

      const resultBytes = await this.contract.evaluateTransaction('GetAllAssets');

      const resultJson = this.utf8Decoder.decode(resultBytes);
      return JSON.parse(resultJson);
    }

    async getAssetById(assetId: string): Promise<Asset> {
        const resultBytes = await this.contract.evaluateTransaction('ReadAsset', assetId);

        if (!resultBytes || resultBytes.length === 0) {
            throw new Error(`Asset ${assetId} does not exist`);
        }

        const resultJson = this.utf8Decoder.decode(resultBytes);
        console.log(resultJson);
        const json = JSON.parse(resultJson);
        return Asset.create(json.ID, json.Color, json.Size, json.Owner, json.AppraisedValue);
    }

    async createAsset(asset: Asset) {
        await this.contract.submitTransaction('CreateAsset', asset.getId(), asset.getColor(), asset.getSize(), asset.getOwner(), asset.getValue());
    }

    async transferAsset(asset: Asset) {
      console.log('\n--> Async Submit Transaction: TransferAsset, updates existing asset owner');

      const commit = await this.contract.submitAsync('TransferAsset', {
          arguments: [asset.getId(), asset.getOwner()],
      });
      const oldOwner = this.utf8Decoder.decode(commit.getResult());
  
      console.log(`*** Successfully submitted transaction to transfer ownership from ${oldOwner} to Saptha`);
      console.log('*** Waiting for transaction commit');
  
      const status = await commit.getStatus();
      if (!status.successful) {
          throw new Error(`Transaction ${status.transactionId} failed to commit with status code ${status.code}`);
      }
    }

}