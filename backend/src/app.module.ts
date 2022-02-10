import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost/fullstack-todo';

@Module({
  imports: [MongooseModule.forRoot(MONGO_URI), TodoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
