import { OnModuleInit } from '@nestjs/common';
import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway({ cors: { origin: '*' } })
export class WebsocketGateway implements OnModuleInit {
  @WebSocketServer()
  server: Server;

  onModuleInit() {
    console.log('Websocket server started');
    this.server.on('connection', (socket) => {
      console.log(socket.id);
      console.log('connected!');
    });
  }

  @SubscribeMessage('newMessage')
  onnewMessage(@MessageBody() body: any) {
    
    this.server.emit('onMessage', {
      msg: 'New Message',
      content: body,
    });
    console.log(body);
  }

  hoge(value) {
    this.server.emit('onMessage', {
      msg: 'New Message',
      content: value,
    });
  }
}
