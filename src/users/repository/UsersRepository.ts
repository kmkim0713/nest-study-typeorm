import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { User } from "../entity/Users";
import { Orders } from "../../orders/entity/OrderEntity";
import { OrderItems } from "../../orders/entity/OrderItemsEntity";
import { Products } from "../../products/entity/ProductsEntity";
import { UserOrderProductDto } from "../dto/UserOrderInfo";

@Injectable()
export class UsersRepository extends Repository<User> {
  constructor(private dataSource: DataSource) {
    super(User, dataSource.createEntityManager());
  }

  getUserOrderList(id: number): Promise<UserOrderProductDto[] | null> {
    return this.createQueryBuilder('u')
      .leftJoin(Orders, 'o', 'u.id = o.user_id') // 직접 FK 연결(Entity에 FK 설정 안되어있는 경우 leftJoinSelect 못씀)
      .leftJoin(OrderItems, 'oi', 'o.id = oi.order_id')
      .leftJoin(Products, 'p', 'oi.product_id = p.id')
      .select([
        'u.id AS userId',
        'u.name AS userName',
        'p.name AS productName',
        'p.description AS productDescription',
        'p.price AS productPrice',
        'p.stock AS productStock',
        'o.status AS orderStatus',
        'o.created_at AS orderCreatedAt',
      ])
      .where('u.id = :userId', {userId: id})
      .andWhere('o.id IS NOT NULL')
      .andWhere('oi.id IS NOT NULL')
      .orderBy('o.created_at', 'DESC')
      .take(10)
      .getRawMany();
  }
}
