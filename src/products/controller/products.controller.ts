import { Controller, Get, Param } from '@nestjs/common';
import { ProductsService } from "../service/products.service";
import { Products } from "../entity/products.entity";

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  getAll(): Promise<Products[]> {
    return this.productsService.findAll();
  }

  @Get(':id')
  getOne(@Param('id') id: number): Promise<Products | null> {
    return this.productsService.findOne(id);
  }
}
