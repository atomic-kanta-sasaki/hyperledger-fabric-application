import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AssetModule } from './module/controller/asset/asset.module';
import { HyperledgerModule } from './module/repository/hyperledger/hyperledger.module';
import { PrismaModule } from './module/repository/prisma/prisma.module';
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
