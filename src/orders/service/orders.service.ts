import { Injectable } from "@nestjs/common";
import { OrdersRepository } from "../repository/orders.repository";
import { Orders } from "../entity/orders.entity";

@Injectable()
export class OrdersService {
  constructor(private readonly ordersRepository: OrdersRepository) {}

  findOne(id: number): Promise<Orders | null> {

    return this.ordersRepository.findOne({
      where: {
        id: id
      }
    })
  }

}
