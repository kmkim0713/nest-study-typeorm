import { Controller, Get } from "@nestjs/common";
import { OrdersService } from "../service/orders.service";

@Controller('order')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

}
