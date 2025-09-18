import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Products } from '../products/entity/products.entity';

@Entity('categories')
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50, unique: true })
  name: string;

  @Column({ length: 255, nullable: true })
  description: string;

  @OneToMany(() => Products, (product) => product.category)
  products: Products[];
}
