import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { User } from "../../entity/user.entity";
import { Orders } from "../../orders/entity/orders.entity";
import { OrderItems } from "../../orders/entity/order-item.entitys";
import { Products } from "../../products/entity/products.entity";

@Injectable()
export class UsersRepository extends Repository<User> {
  constructor(private dataSource: DataSource) {
    super(User, dataSource.createEntityManager());
  }

  getUserOrderList(id: number): Promise<unknown[] | null> {
    return this.createQueryBuilder('u')
      .leftJoin(Orders, 'o', 'u.id = o.user_id')
      .leftJoin(OrderItems, 'oi', 'o.id = oi.order_id')
      .leftJoin(Products, 'p', 'oi.product_id = p.id')
      .select([
        'u.id',
        'u.name AS user_name',
        'p.name AS product_name',
        'p.description',
        'p.price',
        'p.stock',
        'o.status',
        'o.createdAt',
      ])
      .where('u.id = :userId', {userId: id})
      .andWhere('o.id IS NOT NULL')
      .andWhere('oi.id IS NOT NULL')
      .orderBy('o.created_at', 'DESC')
      .take(10)
      .getRawMany();
  }
}
