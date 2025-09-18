import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Orders } from "../entity/OrderEntity";
import { OrdersController } from "../controller/OrdersController";
import { OrderService } from "../service/OrderService";
import { OrderRepository } from "../repository/OrderRepository";

@Module({
  imports: [TypeOrmModule.forFeature([Orders])],
  controllers: [OrdersController],
  providers: [OrderService, OrderRepository],
  exports: [OrderService]
})
export class OrderModule {}
