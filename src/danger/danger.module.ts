import { Module } from '@nestjs/common';
import { DangerController } from './danger.controller';
import { DangerService } from './danger.service';

@Module({
  controllers: [DangerController],
  providers: [DangerService]
})
export class DangerModule {}
