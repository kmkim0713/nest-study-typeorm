import { Module } from '@nestjs/common';
import { AppController } from './AppController';
import { AppService } from './AppService';
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProductsModule } from "./products/module/ProductsModule";
import { Products } from "./products/entity/ProductsEntity";
import { OrderItems } from "./orders/entity/OrderItemsEntity";
import { Orders } from "./orders/entity/OrderEntity";
import { User } from "./entity/Users";
import { Category } from "./entity/Category";
import { UsersModule } from "./users/module/UsersModule";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'kmkim',
      password: '1234',
      database: 'nestTypeormDb',
      entities: [Products, Category, User, Orders, OrderItems],
      autoLoadEntities: true,
    }),
    ProductsModule,
    UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
