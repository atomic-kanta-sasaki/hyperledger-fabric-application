import { Injectable } from '@nestjs/common';
import * as grpc from '@grpc/grpc-js';
import { promises as fs } from 'fs';
import { connect, Contract, Identity, Signer, signers } from '@hyperledger/fabric-gateway';
import * as crypto from 'crypto';
import { FabricGatewayService } from './hyperledger/fabric-gateway/fabric-gateway.service';

@Injectable()
export class AppService {
  constructor(
    private readonly fabricGatewayService: FabricGatewayService,
  ) {
    this.fabricGatewayService.createConnection();
  }
  private readonly peerEndpoint = this.envOrDefault('PEER_ENDPOINT', 'localhost:7051');
  private readonly peerHostAlias = this.envOrDefault('PEER_HOST_ALIAS', 'peer0.org1.example.com');
  private readonly mspId = this.envOrDefault('MSP_ID', 'Org1MSP');
  private readonly channelName = this.envOrDefault('CHANNEL_NAME', 'mychannel');
  private readonly chaincodeName = this.envOrDefault('CHAINCODE_NAME', 'basic');
  private utf8Decoder = new TextDecoder();
  private assetId = `asset${Date.now()}`;
  async getHello(): Promise<string> {
    const client = await this.newGrpcConnection();
    try {
      // Get a network instance representing the channel where the smart contract is deployed.
      // const network = gateway.getNetwork(this.channelName);

      // Get the smart contract from the network.
      const contract = this.fabricGatewayService.getContract(this.channelName, this.chaincodeName);

      // Initialize a set of asset data on the ledger using the chaincode 'InitLedger' function.
      // await this.initLedger(contracat);

      // // Return all the current assets on the ledger.
      await this.getAllAssets(contract);

      // // Create a new asset on the ledger.
      // await this.createAsset(contract);

      // // Update an existing asset asynchronously.
      // await this.transferAssetAsync(contract);

      // // Get the asset details by assetID.`
      // await this.readAssetByID(contract);

      // // Update an asset which does not exist.
      // await this.updateNonExistentAsset(contract)
  } finally {
      this.fabricGatewayService.closeConnection();
      client.close();
  }
    return 'Hello World!';
  }

  private async newGrpcConnection(): Promise<grpc.Client> {
    const tlsRootCert = await fs.readFile('ca.crt'); // test-network/organizations/peerOrganizations/org1.example.com/peers/peer0.org1.example.com/tls/ca.crt
    const tlsCredentials = grpc.credentials.createSsl(tlsRootCert);
    return new grpc.Client(this.peerEndpoint, tlsCredentials, {
        'grpc.ssl_target_name_override': this.peerHostAlias,
    });
  }

  private async initLedger(contract: Contract): Promise<void> {
    console.log('\n--> Submit Transaction: InitLedger, function creates the initial set of assets on the ledger');

    await contract.submitTransaction('InitLedger');

    console.log('*** Transaction committed successfully');
  }

  /**
   * Evaluate a transaction to query ledger state.
   */
  async getAllAssets(contract: Contract): Promise<void> {
    console.log('\n--> Evaluate Transaction: GetAllAssets, function returns all the current assets on the ledger');

    const resultBytes = await contract.evaluateTransaction('GetAllAssets');

    const resultJson = this.utf8Decoder.decode(resultBytes);
    const result = JSON.parse(resultJson);
    console.log('*** Result:', result);
  }

  /**
  * Submit a transaction synchronously, blocking until it has been committed to the ledger.
  */
  async createAsset(contract: Contract): Promise<void> {
    console.log('\n--> Submit Transaction: CreateAsset, creates new asset with ID, Color, Size, Owner and AppraisedValue arguments');

    await contract.submitTransaction(
        'CreateAsset',
        this.assetId,
        'yellow',
        '5',
        'Tom',
        '1300',
    );

      console.log('*** Transaction committed successfully');
  }

  /**
  * Submit transaction asynchronously, allowing the application to process the smart contract response (e.g. update a UI)
  * while waiting for the commit notification.
  */
  async transferAssetAsync(contract: Contract): Promise<void> {
    console.log('\n--> Async Submit Transaction: TransferAsset, updates existing asset owner');

    const commit = await contract.submitAsync('TransferAsset', {
        arguments: [this.assetId, 'Saptha'],
    });
    const oldOwner = this.utf8Decoder.decode(commit.getResult());

    console.log(`*** Successfully submitted transaction to transfer ownership from ${oldOwner} to Saptha`);
    console.log('*** Waiting for transaction commit');

    const status = await commit.getStatus();
    if (!status.successful) {
        throw new Error(`Transaction ${status.transactionId} failed to commit with status code ${status.code}`);
    }

    console.log('*** Transaction committed successfully');
  }

  async readAssetByID(contract: Contract): Promise<void> {
    console.log('\n--> Evaluate Transaction: ReadAsset, function returns asset attributes');

    const resultBytes = await contract.evaluateTransaction('ReadAsset', this.assetId);

    const resultJson = this.utf8Decoder.decode(resultBytes);
    const result = JSON.parse(resultJson);
    console.log('*** Result:', result);
  }

  /**
  * submitTransaction() will throw an error containing details of any error responses from the smart contract.
  */
  async updateNonExistentAsset(contract: Contract): Promise<void>{
    console.log('\n--> Submit Transaction: UpdateAsset asset70, asset70 does not exist and should return an error');

    try {
        await contract.submitTransaction(
            'UpdateAsset',
            'asset70',
            'blue',
            '5',
            'Tomoko',
            '300',
        );
        console.log('******** FAILED to return an error');
    } catch (error) {
        console.log('*** Successfully caught the error: \n', error);
    }
  }

  /**
   * envOrDefault() will return the value of an environment variable, or a default value if the variable is undefined.
   */
  private envOrDefault(key: string, defaultValue: string): string {
    return process.env[key] || defaultValue;
  }

}
