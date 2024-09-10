import { Module } from '@nestjs/common';
import { PeerRepository } from 'src/repository/peer/peerRepository';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [PeerRepository],
  exports: [PeerRepository],
})
export class PeerRepositoryModule {}
