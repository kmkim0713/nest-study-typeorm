import { Controller, Get, Param } from '@nestjs/common';
import { ProductsService } from "../service/ProductsService";
import { Products } from "../entity/ProductsEntity";

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
