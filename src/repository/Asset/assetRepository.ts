import { Contract } from "@hyperledger/fabric-gateway";
import { FabricGatewayService } from "src/hyperledger/fabric-gateway/fabric-gateway.service";
import { Injectable, OnModuleInit } from '@nestjs/common';

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

}