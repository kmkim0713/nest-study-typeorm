import { Module } from '@nestjs/common';
import { ProductsController } from "../controller/products.controller";
import { ProductsService } from "../service/products.service";
import { ProductsRepository } from "../repository/products.repository";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Products } from "../entity/products.entity";
import { Category } from "../../entity/category.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Products, Category])],
  controllers: [ProductsController],
  providers: [ProductsService, ProductsRepository],
  exports: [ProductsService],
})
export class ProductsModule {
}
