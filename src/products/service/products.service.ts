import { Injectable } from '@nestjs/common';
import { ProductsRepository } from "../repository/products.repository";
import { Products } from "../entity/products.entity";

@Injectable()
export class ProductsService {
  constructor(private readonly productsRepository: ProductsRepository) {}

  findAll(): Promise<Products[]> {
    return this.productsRepository.find({ relations: ['category'] });
  }

  findOne(id: number): Promise<Products | null> {
    return this.productsRepository.findOne({
      where: { id },
      relations: ['category'],
    });
  }
}
