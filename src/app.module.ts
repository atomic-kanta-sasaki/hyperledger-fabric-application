import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AssetModule } from './module/asset/asset.module';
import { HyperledgerModule } from './module/hyperledger/hyperledger.module';
import { PrismaModule } from './module/prisma/prisma.module';
import { AuthenticationMiddleware } from './middleware/authentication.middleware';

@Module({
  imports: [AssetModule, HyperledgerModule, PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
      consumer.apply(AuthenticationMiddleware).forRoutes('*');
  }
}
