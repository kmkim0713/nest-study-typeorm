import { Controller, Get, Param } from '@nestjs/common';
import { ProductsService } from "../service/products.service";
import { Product } from "../entity/product.entity";

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  getAll(): Promise<Product[]> {
    return this.productsService.findAll();
  }

  @Get(':id')
  getOne(@Param('id') id: number): Promise<Product | null> {
    return this.productsService.findOne(id);
  }
}
