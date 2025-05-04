import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { SafetyModule } from './safety/safety.module';
import { DangerModule } from './danger/danger.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [AuthModule, UserModule, SafetyModule, DangerModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
