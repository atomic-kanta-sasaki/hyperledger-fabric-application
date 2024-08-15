import { Injectable } from '@nestjs/common';
import { promises as fs } from 'fs';
import { Identity } from '@hyperledger/fabric-gateway';

@Injectable()
export class IdentityProvider {
    async newIdentity(mspId: string, path: string): Promise<Identity> {
        const credentials = await fs.readFile(path); //test-network/organizations/peerOrganizations/org1.example.com/users/User1@org1.example.com/msp/signcerts/
        return { mspId, credentials };
      }
}
