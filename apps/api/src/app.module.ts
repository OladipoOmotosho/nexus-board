import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TeamsModule } from './teams/teams.module';
import { MembershipsModule } from './memberships/memberships.module';
import { BoardsModule } from './boards/boards.module';
import { ColumnsModule } from './columns/columns.module';
import { TasksModule } from './tasks/tasks.module';
import { CommentsModule } from './comments/comments.module';
import { NotificationsModule } from './notifications/notifications.module';
import { InvitationsModule } from './invitations/invitations.module';
import { ActivityModule } from './activity/activity.module';
import { WsModule } from './ws/ws.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    UsersModule,
    TeamsModule,
    MembershipsModule,
    BoardsModule,
    ColumnsModule,
    TasksModule,
    CommentsModule,
    NotificationsModule,
    InvitationsModule,
    ActivityModule,
    WsModule,
  ],
})
export class AppModule {}
