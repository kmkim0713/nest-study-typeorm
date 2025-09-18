import { Injectable } from "@nestjs/common";
import { Order } from "../entity/order.entity";
import { DataSource, Repository } from "typeorm";

@Injectable
export class OrdersRepository extends Repository<Order>{
  constructor(private dataSource: DataSource) {
    super(Order, dataSource.createEntityManager());
  }

}
