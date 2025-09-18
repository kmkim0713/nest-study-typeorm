import { Injectable } from "@nestjs/common";
import { Orders } from "../entity/OrderEntity";
import { DataSource, Repository } from "typeorm";

@Injectable()
export class OrderRepository extends Repository<Orders>{
  constructor(private dataSource: DataSource) {
    super(Orders, dataSource.createEntityManager());
  }

}
