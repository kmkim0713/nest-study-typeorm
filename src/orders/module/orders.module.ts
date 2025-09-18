import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Order } from "../entity/order.entity";
import { OrdersController } from "../controller/orders.controller";
import { OrdersService } from "../service/orders.service";
import { OrdersRepository } from "../repository/orders.repository";

@Module({
  imports: [TypeOrmModule.forFeature([Order])],
  controllers: [OrdersController],
  providers: [OrdersService, OrdersRepository],
  exports: [OrdersService]
})
export class OrdersModule {}
