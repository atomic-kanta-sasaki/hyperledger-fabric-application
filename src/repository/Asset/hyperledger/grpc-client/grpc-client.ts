import { Injectable } from '@nestjs/common';
import { promises as fs } from 'fs';
import * as grpc from '@grpc/grpc-js';

@Injectable()
export class GrpcClientProvider {
    async newGrpcConnection(peerEndpoint: string, peerHostAlias: string, path: string): Promise<grpc.Client> {
        const tlsRootCert = await fs.readFile(path); // test-network/organizations/peerOrganizations/org1.example.com/peers/peer0.org1.example.com/tls/ca.crt
        const tlsCredentials = grpc.credentials.createSsl(tlsRootCert);
        return new grpc.Client(peerEndpoint, tlsCredentials, {
            'grpc.ssl_target_name_override': peerHostAlias,
        });
      }
}
