import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Products } from "../../products/entity/ProductsEntity";
import { User } from "../entity/Users";
import { OrderItems } from "../../orders/entity/OrderItemsEntity";
import { Orders } from "../../orders/entity/OrderEntity";
import { UsersController } from "../controller/UsersController";
import { UsersService } from "../service/UsersService";
import { UsersRepository } from "../repository/UsersRepository";

@Module({
  imports: [TypeOrmModule.forFeature([User, Products, Orders, OrderItems])],
  controllers: [UsersController],
  providers: [UsersService, UsersRepository],
  exports: [UsersService]
})
export class UsersModule {
}
