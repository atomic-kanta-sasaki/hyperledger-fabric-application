import { Module } from '@nestjs/common';
import { AssetModule } from './module/asset/asset.module';
import { HyperledgerModule } from './module/hyperledger/hyperledger.module';

@Module({
  imports: [AssetModule, HyperledgerModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
