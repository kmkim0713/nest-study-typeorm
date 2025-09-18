import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Orders } from "../entity/orders.entity";
import { OrdersController } from "../controller/orders.controller";
import { OrdersService } from "../service/orders.service";
import { OrdersRepository } from "../repository/orders.repository";

@Module({
  imports: [TypeOrmModule.forFeature([Orders])],
  controllers: [OrdersController],
  providers: [OrdersService, OrdersRepository],
  exports: [OrdersService]
})
export class OrdersModule {}
