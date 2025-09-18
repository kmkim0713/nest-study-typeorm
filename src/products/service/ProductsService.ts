import { Injectable } from '@nestjs/common';
import { ProductsRepository } from "../repository/ProductsRepository";
import { Products } from "../entity/ProductsEntity";

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
