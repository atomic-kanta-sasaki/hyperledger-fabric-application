import { Injectable } from '@nestjs/common';
import { WebsocketGateway } from 'src/websocket/gateway';

@Injectable()
export class RegisterAssetService {
  constructor(private readonly gawaway: WebsocketGateway) {}
  async call(value: string): Promise<void> {
    this.gawaway.hoge(value)
    console.log('registerAssetService');
  }
}
