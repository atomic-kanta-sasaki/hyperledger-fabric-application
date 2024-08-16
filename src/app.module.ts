import { Module } from '@nestjs/common';
import { AssetModule } from './module/asset/asset.module';
import { HyperledgerModule } from './module/hyperledger/hyperledger.module';
import { PrismaModule } from './module/prisma/prisma.module';

@Module({
  imports: [AssetModule, HyperledgerModule, PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
