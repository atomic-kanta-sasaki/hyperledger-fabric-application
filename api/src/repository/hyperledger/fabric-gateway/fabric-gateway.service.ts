import {
  connect,
  Network,
  Gateway,
  Contract,
} from '@hyperledger/fabric-gateway';
import { Injectable } from '@nestjs/common';
import { GrpcClientProvider } from '../grpc-client/grpc-client';
import { IdentityProvider } from '../identity/identity';
import { SignerProvider } from '../signer/signer';
import { RequestService } from 'src/usecase/request/request.service';
import { UserRepository } from 'src/repository/user/userRepository';
import { PeerRepository } from 'src/repository/peer/peerRepository';

@Injectable()
export class FabricGatewayService {
  private gateway: Gateway;

  constructor(
    private readonly clientProvider: GrpcClientProvider,
    private readonly identityProvider: IdentityProvider,
    private readonly signerProvider: SignerProvider,
    private readonly requestService: RequestService,
    private readonly userRepository: UserRepository,
    private readonly peerRepository: PeerRepository,
  ) {}

  async createConnection() {
    const userId = this.requestService.getUserId();
    const user = await this.getUserById(userId);
    const peer = await this.getPeerByOrganizationId(user.organizationId);
    const grpcConnection = await this.clientProvider.newGrpcConnection(
      peer.peerEndpoint,
      peer.peerHostAlias,
      peer.tlsCertPath,
    );
    const identity = await this.identityProvider.newIdentity(
      user.mspId,
      user.certPath,
    );
    const signer = await this.signerProvider.newSigner(user.privateKeyPath);
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

  private getNetwork(channelName: string): Network {
    return this.gateway.getNetwork(channelName);
  }

  getContract(channelName: string, contractName: string): Contract {
    return this.getNetwork(channelName).getContract(contractName);
  }

  private closeConnection(): void {
    this.gateway.close();
  }

  private async getPeerByOrganizationId(organizationId: string) {
    return this.peerRepository.getPeerByOrganizationId(organizationId);
  }

  private async getUserById(id: string) {
    return this.userRepository.getUserById(id);
  }
}
