import { Module } from '@nestjs/common';
import { ControllerModule } from './adapters/controller/rest/controller.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ControllerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
