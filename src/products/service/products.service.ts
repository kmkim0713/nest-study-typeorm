import { Injectable } from '@nestjs/common';
import { ProductsRepository } from "../repository/products.repository";
import { Product } from "../entity/product.entity";

@Injectable()
export class ProductsService {
  constructor(private readonly productsRepository: ProductsRepository) {}

  findAll(): Promise<Product[]> {
    return this.productsRepository.find({ relations: ['category'] });
  }

  findOne(id: number): Promise<Product | null> {
    return this.productsRepository.findOne({
      where: { id },
      relations: ['category'],
    });
  }
}
