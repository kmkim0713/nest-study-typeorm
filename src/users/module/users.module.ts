import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Products } from "../../products/entity/products.entity";
import { User } from "../../entity/user.entity";
import { OrderItems } from "../../orders/entity/order-item.entitys";
import { Orders } from "../../orders/entity/orders.entity";
import { UsersController } from "../controller/users.controller";
import { UsersService } from "../service/users.service";
import { UsersRepository } from "../repository/users.repository";

@Module({
  imports: [TypeOrmModule.forFeature([User, Products, Orders, OrderItems])],
  controllers: [UsersController],
  providers: [UsersService, UsersRepository],
  exports: [UsersService]
})
export class UsersModule {
}
