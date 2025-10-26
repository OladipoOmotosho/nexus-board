import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  MessageBody,
  ConnectedSocket,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    credentials: true,
  },
})
export class EventsGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  handleConnection(client: Socket) {
    console.log(`Client connected: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    console.log(`Client disconnected: ${client.id}`);
  }

  @SubscribeMessage('message')
  handleMessage(@MessageBody() data: any, @ConnectedSocket() client: Socket) {
    return { event: 'message', data };
  }

  @SubscribeMessage('joinBoard')
  handleJoinBoard(@MessageBody() boardId: string, @ConnectedSocket() client: Socket) {
    client.join(`board-${boardId}`);
    return { event: 'joinedBoard', data: boardId };
  }

  @SubscribeMessage('leaveBoard')
  handleLeaveBoard(@MessageBody() boardId: string, @ConnectedSocket() client: Socket) {
    client.leave(`board-${boardId}`);
    return { event: 'leftBoard', data: boardId };
  }

  // Broadcast to a specific board
  notifyBoard(boardId: string, event: string, data: any) {
    this.server.to(`board-${boardId}`).emit(event, data);
  }
}
