import { connect, Network, Gateway, Contract } from '@hyperledger/fabric-gateway';
import { Injectable } from '@nestjs/common';
import { GrpcClientProvider } from '../grpc-client/grpc-client';
import { IdentityProvider } from '../identity/identity';
import { SignerProvider } from '../signer/signer';

@Injectable()
export class FabricGatewayService  {
    private gateway: Gateway;

    constructor(
        private readonly clientProvider: GrpcClientProvider,
        private readonly identityProvider: IdentityProvider,
        private readonly signerProvider: SignerProvider,
    ) {}

    async createConnection() {
        const grpcConnection = await this.clientProvider.newGrpcConnection('localhost:7051', 'peer0.org1.example.com', 'user/ca.crt');
        const identity = await this.identityProvider.newIdentity('Org1MSP','user/cert.pem');
        const signer = await this.signerProvider.newSigner('user/private_key.pem')
        this.gateway = connect({
            client: grpcConnection,
            identity: identity,
            signer: signer,
            // Default timeouts for different gRPC calls
            evaluateOptions: () => {
                return { deadline: Date.now() + 5000 }; // 5 seconds
            },
            endorseOptions: () => {
                return { deadline: Date.now() + 15000 }; // 15 seconds
            },
            submitOptions: () => {
                return { deadline: Date.now() + 5000 }; // 5 seconds
            },
            commitStatusOptions: () => {
                return { deadline: Date.now() + 60000 }; // 1 minute
            },
          });
    }

    getNetwork(channelName: string): Network {
       return this.gateway.getNetwork(channelName);       
    }

    getContract(channelName: string, contractName: string): Contract {
        return this.getNetwork(channelName).getContract(contractName);
    }

    closeConnection(): void {
        this.gateway.close();
    }
}
