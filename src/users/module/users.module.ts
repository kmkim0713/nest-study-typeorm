import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Product } from "../../products/entity/product.entity";
import { User } from "../../entity/user.entity";
import { OrderItem } from "../../orders/entity/order-item.entity";
import { Order } from "../../orders/entity/order.entity";
import { UsersController } from "../controller/users.controller";
import { UsersService } from "../service/users.service";
import { UsersRepository } from "../repository/users.repository";

@Module({
  imports: [TypeOrmModule.forFeature([User, Product, Order, OrderItem])],
  controllers: [UsersController],
  providers: [UsersService, UsersRepository],
  exports: [UsersService]
})
export class UsersModule {
}
