import { Signer, signers } from '@hyperledger/fabric-gateway';
import { Injectable } from '@nestjs/common';
import { promises as fs } from 'fs';
import * as crypto from 'crypto';

@Injectable()
export class SignerProvider {
    async newSigner(path: string): Promise<Signer> {
        const privateKeyPem = await fs.readFile(path); //test-network/organizations/peerOrganizations/org1.example.com/users/User1@org1.example.com/msp/keystore/
        const privateKey = crypto.createPrivateKey(privateKeyPem);
        return signers.newPrivateKeySigner(privateKey);
      }
}
