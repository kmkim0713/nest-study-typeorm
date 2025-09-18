import { Injectable } from "@nestjs/common";
import { OrdersRepository } from "../repository/orders.repository";
import { Order } from "../entity/order.entity";

@Injectable()
export class OrdersService {
  constructor(private readonly ordersRepository: OrdersRepository) {}

  findOne(id: number): Promise<Order | null> {

    return this.ordersRepository.findOne({
      where: {
        id: id
      }
    })
  }

}
