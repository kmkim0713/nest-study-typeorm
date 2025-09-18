import { Repository } from 'typeorm';
import { DataSource } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Products } from "../entity/products.entity";

@Injectable()
export class ProductsRepository extends Repository<Products> {
  constructor(private dataSource: DataSource) {
    super(Products, dataSource.createEntityManager());
  }
}
