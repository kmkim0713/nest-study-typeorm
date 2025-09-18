import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Orders } from './OrderEntity';
import { Products } from '../../products/entity/ProductsEntity';

@Entity('order_items')
export class OrderItems {
  @PrimaryGeneratedColumn('increment', { type: 'bigint' })
  id: number;

  @ManyToOne(() => Orders, (order) => order.orderItems, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'order_id' })
  order: Orders;

  @ManyToOne(() => Products, (product) => product.orderItems)
  @JoinColumn({ name: 'product_id' })
  product: Products;

  @Column()
  quantity: number;

  @Column('decimal', { precision: 10, scale: 2 })
  price: number;
}
