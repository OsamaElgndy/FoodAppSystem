import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UseModule } from './modules/auth/user/use.module';

@Module({
  imports: [UseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
