import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { Peer } from "@prisma/client";

@Injectable()
export class PeerRepository {
    constructor(private readonly prisma: PrismaService) {}
    async getPeerByOrganizationId(organizationId: string): Promise<Peer> {
        try {
            const peer = await this.prisma.peer.findFirstOrThrow({
                where: {
                    organizationId: organizationId,
                },
            });
            return peer;
        } catch (error) {
            throw new Error('Peer not found');
        }
    }

    async createPeer(): Promise<void> {

    }

    async updatePeer(): Promise<void> {

    }
}