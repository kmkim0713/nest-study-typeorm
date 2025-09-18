import { Controller, Get } from "@nestjs/common";
import { OrderService } from "../service/OrderService";

@Controller('order')
export class OrdersController {
  constructor(private readonly ordersService: OrderService) {}

}
