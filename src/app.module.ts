import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProductsModule } from "./products/module/products.module";
import { Products } from "./products/entity/products.entity";
import { OrderItems } from "./orders/entity/order-item.entitys";
import { Orders } from "./orders/entity/orders.entity";
import { User } from "./entity/user.entity";
import { Category } from "./entity/category.entity";
import { UsersModule } from "./users/module/users.module";

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
