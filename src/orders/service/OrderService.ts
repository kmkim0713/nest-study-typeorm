import { Injectable } from "@nestjs/common";
import { OrderRepository } from "../repository/OrderRepository";
import { Orders } from "../entity/OrderEntity";

@Injectable()
export class OrderService {
  constructor(private readonly ordersRepository: OrderRepository) {}

  findOne(id: number): Promise<Orders | null> {

    return this.ordersRepository.findOne({
      where: {
        id: id
      }
    })
  }

}
