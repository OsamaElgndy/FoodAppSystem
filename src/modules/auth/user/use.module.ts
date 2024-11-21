import { Module } from '@nestjs/common';
import { UseService } from './use.service';
import { UseController } from './use.controller';
import { PrismaService } from 'src/common/prisma/prisma';

@Module({
  controllers: [UseController],
  providers: [UseService, PrismaService],
})
export class UseModule {}
