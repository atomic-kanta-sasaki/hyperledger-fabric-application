import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AssetModule } from './module/controller/asset/asset.module';
import { HyperledgerModule } from './module/repository/hyperledger/hyperledger.module';
import { PrismaModule } from './module/repository/prisma/prisma.module';
import { AuthenticationMiddleware } from './middleware/authentication.middleware';
import { GatewayModule } from './websocket/gateway.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    AssetModule,
    HyperledgerModule,
    PrismaModule,
    GatewayModule,
    ConfigModule.forRoot({
      isGlobal: true, // グローバルモジュールとして設定（他のモジュールでインポート不要）
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthenticationMiddleware).forRoutes('*');
  }
}
