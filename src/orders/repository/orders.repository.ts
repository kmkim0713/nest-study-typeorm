import { Injectable } from "@nestjs/common";
import { Orders } from "../entity/orders.entity";
import { DataSource, Repository } from "typeorm";

@Injectable()
export class OrdersRepository extends Repository<Orders>{
  constructor(private dataSource: DataSource) {
    super(Orders, dataSource.createEntityManager());
  }

}
