import { Module } from '@nestjs/common';
import { RegisterAssetService } from 'src/usecase/asset/register.service';
import { WebsocketGateway } from 'src/websocket/gateway';

@Module({
  providers: [RegisterAssetService, WebsocketGateway],
  exports: [RegisterAssetService],
})
export class RegisterAssetModule {}
