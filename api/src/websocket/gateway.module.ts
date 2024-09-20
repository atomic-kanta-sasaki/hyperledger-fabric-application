import { Module } from '@nestjs/common';
import { WebsocketGateway } from './gateway';

@Module({
  providers: [WebsocketGateway],
})
export class WebsocketGatewayModule {}
