import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProductsModule } from "./products/module/products.module";
import { Product } from "./products/entity/product.entity";
import { OrderItem } from "./entity/order-item.entity";
import { Order } from "./entity/order.entity";
import { User } from "./entity/user.entity";
import { Category } from "./entity/category.entity";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'kmkim',
      password: '1234',
      database: 'nestTypeormDb',
      entities: [Product, Category, User, Order, OrderItem],
      autoLoadEntities: true,
    }),
    ProductsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
